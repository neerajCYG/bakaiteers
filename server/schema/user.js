var mongoose = require('mongoose');
var UserSchema = mongoose.Schema({
    userEmail:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
});
var User = mongoose.model('userinfo', UserSchema);
module.exports = User;
