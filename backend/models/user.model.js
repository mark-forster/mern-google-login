const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    google_id:{
        type: String,
        default:''
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    profile:{
        type: String,
        default: 'No profile picture'
    }
},{timestamps: true});

module.exports = mongoose.model('User', userSchema);