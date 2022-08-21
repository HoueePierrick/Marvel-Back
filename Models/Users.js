const mongoose = require('mongoose');

// Creation of the user model
const User = mongoose.model('User', {
    firstname: String,
    lastname: String,
    emailaddress: String,
    birthdate: Date,
    specialoffers: Boolean,
    newsletter: Boolean,
    country: String,
    salt: String,
    hash: String,
    token: String,
});

module.exports = User;