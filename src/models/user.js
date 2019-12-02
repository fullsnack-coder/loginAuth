'use strict';

const mongoose, {Schema} = require('mongoose');

const userSchema = new Schema({
    username : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user', userSchema);