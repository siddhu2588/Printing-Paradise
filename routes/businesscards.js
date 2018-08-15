const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('businesscards' , {stylesheet : 'businesscards.css'})
})
module.exports = route