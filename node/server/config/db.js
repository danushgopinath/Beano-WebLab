const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017')

db = mongoose.connection;

db.on('connected', function(){
    console.log("MongoDB connection established")
})

db.on('error', function(err){
    console.log(err)
})

 