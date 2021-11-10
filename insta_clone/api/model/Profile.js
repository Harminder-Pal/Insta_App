const mongoose = require("mongoose");
const validator = require("validator");

const ProfileSchema  = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    bio:{
        type:  String
    },
    accountType: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
      },

    name:{
        type:  String
    },
    username:{
        type:  String,
        required: [true, `username should be unique`],
        unique: true
    },
    email: {
        type:  String
    },
    birthday:{
        type: Date,
        select: false
    },
    gender: {
        type:  String
    }
})

module.exports =  mongoose.model('Profile', ProfileSchema);