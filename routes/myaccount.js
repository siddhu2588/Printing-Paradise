const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('myaccount')
})
module.exports = route