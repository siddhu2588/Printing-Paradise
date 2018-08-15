const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('profile')
})
module.exports = route