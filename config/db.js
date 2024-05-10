const mongoose = require('mongoose')

const configureDB = async() =>{
    try {
        const db = await mongoose.connect(process.env.DB_URL)
        console.log('db connected')
    } catch(e) {
        console.log(e)
    }
}

module.exports=configureDB