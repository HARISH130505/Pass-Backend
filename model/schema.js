const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fn:{
        type:String,
        required:true
    },
    ln:{
        type:String,
        required:true
    },
    passno:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    pob:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('User',userSchema)