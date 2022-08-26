// import of express
const express = require('express');
const router = express.Router();

// Import of the FavChars model
const FavChar = require("../../Models/FavChars");

// Import of axios
const axios = require("axios");

// Route to add characters in favorites
// Inputs are type, content, account_email
// Returns an array containing all the favorite characters associated to the account
router.post("favorite/characters/add", async(req, res) => {
    try {
        const {type, content, account_email} = req.fields;
        const NewFavChar = new FavChar(
            {
                type: type,
                content: content,
                account_email: account_email
            });
        await NewFavChar.save();
        const AllFavChar = await FavChar.find({account_email: account_email})
        res.status(200).json({AllFavChar})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;