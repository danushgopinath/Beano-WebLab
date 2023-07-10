const express = require('express')
const router = express.Router()

const user = require('../models/user.model')

router.get('/', function(req, res){
    user.find().then(function(doc){
        res.send(doc)
    })
}).post('/', function(req, res){
    const obj = req.body
    user.create(doc).then(function(doc){
        res.send(doc)
    })
})

module.exports = router;