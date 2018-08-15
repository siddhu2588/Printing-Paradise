const route = require('express').Router()

route.get('/' , (req , res , next)=> {

    res.render('/testing')
})
module.exports = route