// import of express
const express = require('express');
const router = express.Router();

// Import of the FavChars model
const FavChars = require("../Models/FavChars");

// Import of axios
const axios = require("axios");

// Route to be created
// Route to add characters in favorites
router.post("favorite/characters", async(req, res) => {
    try {
        res.status(200).json({message: "Route being created"})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;