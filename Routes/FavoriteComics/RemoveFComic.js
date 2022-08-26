const express = require('express');
const router = express.Router();

// Import of the FavComics model
const FavComic = require("../../Models/FavComics");

// Route to remove comics in favorites
// Inputs are type, content, account_email
// Returns an array containing all the favorite comics associated to the account
router.post("/favorite/comics/remove", async(req, res) => {
    try {
        const {type, content, account_email} = req.fields;
        await FavComic.deleteOne({"content._id": content._id});
        const AllFavCom = await FavComic.find({account_email: account_email});
        res.status(200).json({AllFavCom})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;