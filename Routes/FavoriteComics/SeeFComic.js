const express = require('express');
const router = express.Router();

// Import of the FavComics model
const FavComic = require("../../Models/FavComics");

// Route to see all comics in favorites
// Input is the user email
// Returns an array containing all the favorite comics associated to the account
router.get("/favorite/comics/see", async(req, res) => {
    try {
        const {email} = req.query;
        const AllFavCom = await FavComic.find({account_email: account_email});
        res.status(200).json({AllFavCom})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;