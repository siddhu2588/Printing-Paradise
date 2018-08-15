const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('aboutUs')
})
module.exports = route