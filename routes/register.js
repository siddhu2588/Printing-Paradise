const route = require('express').Router()
const user = require('../data/signup')
const passport = require('passport')

route.get('/' , (req , res , next)=> {

    res.render('register')
}) 

route.post('/' , (req , res , next)=> {
   const User = new user({
    username :  req.body.username , 
    password : req.body.password
   }
   )

  
       user.register(User , req.body.password , function(err, user) {
        if (err) {
             res.redirect('/register')
        
        }
        console.log(user)
        passport.authenticate("local")(req, res, function() {
            // redirect user or do whatever you want
            res.redirect('/indexlogin')
        });
     });
   })

module.exports = route