// import of express
const express = require('express');
const router = express.Router();

// Import of the FavChars model
const FavComic = require("../../Models/FavComics");

// Route to add comics in favorites
// Inputs are type, content, account_email
// Returns an array containing all the favorite comics associated to the account
router.post("/favorite/characters/add", async(req, res) => {
    try {
        const {type, content, account_email} = req.fields;
        const NewFavCom = new FavComic(
            {
                type: type,
                content: content,
                account_email: account_email
            });
        await NewFavCom.save();
        const AllFavCom = await FavChar.find({account_email: account_email})
        res.status(200).json({AllFavCom})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;