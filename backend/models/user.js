const mongoose = require('mongoose');
// create user table

const Users = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }

});
module.exports = user = mongoose.model('user', Users);