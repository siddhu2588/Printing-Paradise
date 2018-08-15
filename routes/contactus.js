const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('contactus')
})
module.exports = route