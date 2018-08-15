const route = require('express').Router()
const passsport = require('passport')

route.get('/' , (req , res , next)=> {

    res.render('login')
})

route.post('/' , passport.authenticate('local' ,  {

    successRedirect : '/home' , 

    failureRedirect : '/indexlogin'

}));
module.exports = route