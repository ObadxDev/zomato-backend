const LocationModel = require('../models/LocationModel')

module.exports.getHome = (request, response) =>{
    response.send({
        status : true,
        message : 'API is working'
    })
}

module.exports.getLocationList = async (request, response) =>{
    let result = await LocationModel.find()
    response.send({
        status : true,
        result
    })
}