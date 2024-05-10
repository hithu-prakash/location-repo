const User= require('../models/user-model')

const userSearchValidation = {
    uid:{
        in:['query'],
        exists:{
            errorMessage:'uid is requied'
        },
        notEmpty:{
            errorMessage:"uid cannot be empty"
        }
    }
}

module.exports={
    userSearchValidation
}


