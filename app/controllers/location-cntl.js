const Locationmap = require('../models/location-models')
const axios = require('axios')


module.exports.location= async(req,res)=>{
    const Apikey="fe11de2c6b3e47b795ebce08505ab82a"
   /* console.log(req.query) */

    const {address} = req.query

    try{
        const location = await Locationmap.findOne({address:address})
        if(!location) {
            const response= await axios.get(`https://api.opencagedata.com/geocode/v1/json?`,{
                params : {
                    key: Apikey,
                    query:address
                }
            })
            console.log('lat',response.data.results[0].geometry.lat)
            console.log('lng',response.data.results[0].geometry.lng)
            const {lat,lng} = response.data.results[0].geometry
            const newGeo = await Locationmap.create({address:address , latitude:lat , longitude:lng})
            console.log('newGeo',newGeo)
            return res.status(201).json(newGeo)
        }
        res.json(location)
    } catch(err) {
        console.log(err)
    }
}