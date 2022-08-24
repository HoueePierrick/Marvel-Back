const mongoose = require('mongoose');

// Creation of the FavChars model
const FavChars = mongoose.model('FavChar', {
    type: String,
    content: {
        comics: Array,
        description: String,
        name: String,
        thumbnail: {
            extension: String,
            path: String,
        },
        __v: Number,
        __id: String,
    },
    account_token: String,
    account_email: String
})

module.exports = FavChars;