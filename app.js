const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
require("dotenv").config();

const AppRoutes = require('./routes/AppRoutes')

const PORT = process.env.PORT || 3030;
const MONGODB_URI = process.env.MONGODB_URI


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api', AppRoutes)

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('database connected successfully');
    app.listen(PORT, ()=>{
        console.log('project is running in port',PORT);
        })
}).catch((error)=>{
    console.log(error);
});