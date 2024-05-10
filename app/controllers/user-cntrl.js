const User = require('../models/user-model')
const {validationResult} = require('express-validator')
const axios = require('axios')
//const usersCltr= {}
//module.exports=userCltr

module.exports.search=async(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const uid=req.query.uid
    try{
        const user=await User.findOne({uid:uid})
        if(!user){
            const response=await axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
            const userObj={
                uid:response.data.id,
                username:response.data.username,
                email:response.data.email,
                address:{
                    city:response.data.address.city,
                    zipcode:response.data.address.zipcode
            }
        }
        const newUser=await User.create(userObj)
        return res.status(201).json(newUser)
    }
    res.json(user)
}
catch(e){
    res.status(500).json("something went wrong")
}}