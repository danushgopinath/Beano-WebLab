const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
    _id : {type:schema.Types.ObjectId, auto:true},
    name : {type:String, required:true},
    gender : {type:String, required:true},
    location : {type:String, required:true},
    above18 : {type:String, required:true}
},{
    versionKey:false
})

const user = mongoose.model('users', userSchema)

module.exports = user