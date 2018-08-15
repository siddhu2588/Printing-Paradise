const route = require('express').Router()
const passport = require('passport')
route.get('/' , (req , res , next)=> {

    res.render('indexlogin', {stylesheet : 'style.css'})
})


route.post('/' , passport.authenticate('local' , {

    successRedirect : '/index' , 
    failureRedirect : '/indexlogin'
    
    // failureRedirect : '/home'
}) )
module.exports = route