const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('promotions')
})
module.exports = route