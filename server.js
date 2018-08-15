const express = require('express')
const path = require('path')
const app = express()  
const exphbs = require('express-handlebars')
const passport = require('passport')
const Localstrategy = require('passport-local')
const sessions = require('express-session')
const user = require('./data/signup')
const mongoose = require('mongoose')
// const mongoclient = require('mongodb').MongoClient;
// const mongo_url = 'mongodb://<siddhu2588>:<siddhu2588>@ds263571.mlab.com:63571/printingparadise';
app.use(express.json())
app.use(express.urlencoded({extended : true}))



//passport Authentication
app.use(sessions({
    secret : 'my secret',
    resave : false , 
    saveUninitialized : true 
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Localstrategy(user.authenticate()))
passport.serializeUser(user.serializeUser())
passport.deserializeUser(user.deserializeUser())



//view engine 
app.set('view engine' , 'handlebars')
app.set('views' , path.join(__dirname , 'views'))
app.engine('handlebars' , exphbs({defaultLayout : 'Layout' , layoutsDir : __dirname + '/views/Layout'}))
app.use(express.static('public'))





//routes
app.use('/' , require('./routes/indexlogin'))
app.use('/aboutUs' , require('./routes/aboutUs') )
app.use('/businesscards' , require('./routes/businesscards') )
app.use('/contactus' , require('./routes/contactus') )
app.use('/forgetpassword' , require('./routes/forgetpassword') )
app.use('/home' , require('./routes/home') )
app.use('/indexlogin' , require('./routes/indexlogin') )
app.use('/index' , require('./routes/index') )
app.use('/myaccount' , require('./routes/myaccount') )
app.use('/profile' , require('./routes/profile') )
app.use('/promotions' , require('./routes/promotions') )
app.use('/register' , require('./routes/register') )
app.use('/testing' , require('./routes/testing') )
app.use('/registers',require('./routes/registers') )


// mongoclient.connect(mongo_url, (err, db) => {
//     if(err) {
//         return console.log(err);
//     }

//     db.collection('login').insertOne(
//         {
//             username: 'siddhu2588',
//             password: 'siddhu2588'
//         },
//         function(err, res) {
//             if(err) {
//                 db.close();
//                 return console.log(err);
//             }

//             db.close();
//         }
//     )



mongoose.connect('mongodb://siddhu2588:siddhu2588@ds263571.mlab.com:63571/printingparadise')

//listening 
app.listen(process.env.PORT , process.env.IP , ()=> {

// })
    // console.log('server started at http://localhost:9000')
})
