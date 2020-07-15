var express = require('express');
var nodemailer = require("nodemailer");
var app = express();
const bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var config = require('./config.json')
const schema = require('./schema/schema')
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
    // app.all("/*", function(req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    //     next();
    // });

app.post('/send', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const content = req.body.content

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.emailId,
            pass: config.password
        }
    });

    const mailOptions = {
        from: config.emailId, // sender address
        to: email, // list of receivers
        bcc: config.emailId,
        subject: 'Thanks for contacting', // Subject line
        html: `Hello ${name} <p>Thanks for contacting us. We will reach out to you soon.</p>
        <p>Your query is: ${content}</p>
        <p> Regards<br/>BakaiTeers Team</p>`
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

    res.send({
        message: "sent"
    })
})

app.get('/youtubeData', (req, res) => {
    const uri = "mongodb+srv://neeraj211090:Sports@111@bakaiteers-8fh9p.mongodb.net/bakaiteers?retryWrites=true&w=majority";
    MongoClient.connect(uri, function(err, db) {
        if (err) throw err;
        var dbo = db.db("bakaiteers");
        dbo.collection("youtubes").find({}).toArray(function(err, result) {
            if (err) throw err;
            res.send({
                result: result,
                status: 200
            })
            db.close();
        });
    });
})


app.get('/test', (req, res) => {
    res.send("done")
})

app.get('/output', (req, res) => {
    var spawn = require("child_process").spawn;

    // E.g : http://localhost:3000/output?message=""

    var process = spawn('./env/bin/python3', ["nowtest.py",
        req.query.message
    ]);


    process.stdout.on('data', function(data) {
        res.send({
            output: data.toString()
        });
    })
})

app.listen(port, function() {
    console.log("Express Started on Port" + port);
});
