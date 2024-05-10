const mongoose = require('mongoose')
const {Schema , model} = mongoose

const LocationSchema = new Schema({
   place:String,
   latitude:Number,
   longitude:Number
    }
)

const Locationmap = model('Locationmap',LocationSchema)

module.exports= Locationmap

//req.use.id - authentication
//req.params.id - single record /api/jobs/23
//req.query.id - search record based on id - /api/jobs?id=d123