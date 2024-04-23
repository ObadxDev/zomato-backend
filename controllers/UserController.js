const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken');

const KEY = 'OBADX'

module.exports.createUserAccount = async (request,response) =>{
    let data = request.body

    let newUser = new UserModel({
        name : data.name,
        mobile : data.mobile,
        email : data.email,
        address : data.address,
        password : data.password
    })

    let result = await newUser.save(); 
    if(result){
        response.send({
            status: true,
            message: 'Your registration is done successfully, you can login now'
        })
    }else{
        response.send({
            status: false,
            message: 'Your registration failed, try again'
        })
    }
}

module.exports.userLogin = async (request,response) =>{
    let data = request.body;

    let result = await UserModel.findOne({
        email : data.email,
        password : data.password
    },{
        password : 0,
        __v : 0
    })

    if(result){
        let data = {
            name : result.name,
            id : result._id,
            email : result.email,
            mobile : result.mobile
        };
        let token = jwt.sign(data,KEY,{ expiresIn : "24h" });
        response.send({
            status: true,
            token,
            message: 'Login Successfully'
        })
    }else{
        response.send({
            status: false,
            message: 'invalid username/password'
        })
    }

}