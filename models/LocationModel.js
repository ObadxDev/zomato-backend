const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema({
    name: {type: String},
    city_id: {type: Number},
    location_id: {type: String},
    city: {type: String},
    country_name: {type: String},
})

const LocationModel = mongoose.model('location', LocationSchema, 'locations');

module.exports = LocationModel;