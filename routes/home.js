const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('home')
})
module.exports = route