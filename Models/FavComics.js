const mongoose = require('mongoose');

// creation of the FavComics model
const FavComics = mongoose.model('FavComic', {
    type: String,
    content: {
        description: String,
        thumbnail: {
            extension: String,
            path: String,
        },
        title: String,
        __v: Number,
        _id: String,
    },
    account_email: String
})

module.exports = FavComics;