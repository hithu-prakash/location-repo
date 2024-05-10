
const mongoose = require('mongoose')
const {Schema , model} = mongoose

const userSchema = new Schema({
    uid:Number,
    username:String,
    email:String,
    address:{
        city:String,
        zipcode:String
    }
})

const User = model('User',userSchema)

module.exports= User

//req.use.id - authentication
//req.params.id - single record /api/jobs/23
//req.query.id - search record based on id - /api/jobs?id=d123