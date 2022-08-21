// import of express
const express = require("express");
const router = express.Router();

// Import of the FavComics model
const FavComics = require("../Models/FavComics")

// Import of axios
const axios = require("axios");

// Route to be created
// Route to add comics in favorites
router.post("/favorite/comics", async(req, res) => {
    try {
        res.status(200).json({message: "Route being created"})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;