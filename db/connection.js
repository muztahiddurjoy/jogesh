const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()
const connectDB = ()=>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(process.env.MONGO_LINK).then(()=>{
            resolve(true)
        }).catch(err=> reject(err))
    })
}
module.exports = connectDB