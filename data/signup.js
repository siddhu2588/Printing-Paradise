const mongoose = require('mongoose')
const passportLocal = require('passport-local-mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    username : {type : String} ,
    password : {type : String}
}) 

 User.plugin(passportLocal)
 module.exports =  mongoose.model('user' , User)