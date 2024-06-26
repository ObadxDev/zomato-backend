const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name : {type: String},
    mobile : {type: String},
    email : {type: String},
    address : {type: String},
    password : {type: String}
})

const UserModel = mongoose.model('user', UserSchema, "users")

module.exports = UserModel