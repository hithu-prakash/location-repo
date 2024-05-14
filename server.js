require('dotenv').config()
const cors = require('cors')
const express = require('express')
const configureDB = require('./config/db')
const {checkSchema}=require('express-validator')

const userCntl=require('./app/controllers/user-cntrl')
const locationCntrl= require('./app/controllers/location-cntl')

const {userSearchValidation}=require('./app/validtions/user-validtions')

const app = express()
const port = 3456

configureDB()

app.use(express.json())
app.use(cors())

app.get('/api/search',checkSchema(userSearchValidation),userCntl.search)

app.get('/location',locationCntrl.location)

app.listen(port,() => {
    console.log('port running sucessfully',port)
})