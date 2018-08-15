const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('registers' , {stylesheet : 'registers.css'})
})
module.exports = route