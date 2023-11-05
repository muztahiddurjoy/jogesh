const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    author:String,
    gali:String,
    descriminator:String,
    time:{
        default: new Date().getTime()
    }
})

module.exports = mongoose.model("gali",schema)