'use strict';
require('dotenv').config();

module.exports = {
    mongoDb : {
        uri: process.env.MONGO_URI
    }
}