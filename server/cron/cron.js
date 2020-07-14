const cron = require("node-cron");
const express = require("express");
const http = require("https")
const schema = require('./schema/schema')

const mongoose = require('mongoose');
const options = {
    useUnifiedTopology: true, //DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
    useNewUrlParser: true, //DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
    poolSize: 10,
    keepAlive: 1
};




app = express();

//command to connect db="mongodb+srv://bakaiteers-8fh9p.mongodb.net/bakaiteers --username neeraj211090"

const uri = "mongodb+srv://neeraj211090:Sports@111@bakaiteers-8fh9p.mongodb.net/bakaiteers?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, options);

console.log("connectd")


cron.schedule('*/5 * * * * *', () => {
    console.log("running a task every minute");
    let api_key = "AIzaSyCi8AR4mEeLT3b-eikwzDGlAYdWC6DZGT4"
    let youtubeId = "UCJtEuR-Ud8j1x_PzxAoEbHA"
    http.get(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&channelId=${youtubeId}&part=snippet,id&order=date&maxResults=20`, (res) => {
        console.log("I am here")
        console.log(res)
        const UserModel = mongoose.model('youtube', schema);
        const data = res
        for (let i = 0; i < data.length; i++) {
            UserModel.collection.update({ title: data[i].title },
                data[i], { upsert: true }
            );
        }
    })
});


app.listen(3128);