const express = require('express');
const router = express.Router();

// Import of the FavChars model
const FavChar = require("../../Models/FavChars");

// Route to see all characters in favorites
// Input is the user email
// Returns an array containing all the favorite characters associated to the account
router.get("/favorite/characters/see", async(req, res) => {
    try {
        const {email} = req.query;
        const AllFavChar = await FavChar.find({account_email: account_email});
        res.status(200).json({AllFavChar})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;