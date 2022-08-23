// Route allowing to retrieve comics associated with a character = get route
// Also can accept as request : order ("inverted to inverse letters"), letter (to filter titles by first letter)
// Input is the charactedID in params
// Expected output is an object containing
    // thumbnail containing => final result should be path + "." + extension
        // path => the image url
        // extension => the extension to be added
    // comics => array containing objects => 
        // _id => comic id
        // title => comic title
        // description => comic description
        // __v => to be defined
// Example 5fcf91f4d8a2480017b91453

// Import of express
const express = require('express');
const router = express.Router();

// Import of axios
const axios = require("axios")

// Import of function to sort comics
const ComicSorter = require("../Functions/ComicSorter")

router.get("/comics/:characterID", async(req, res) => {
    try {
        let APIKey = process.env.API_KEY;
        let CharID = req.params.characterID;
        let query = `https://lereacteur-marvel-api.herokuapp.com/comics/${CharID}?apiKey=${APIKey}`;
        await axios.get(query)
            .then((response) => res.status(200).json(ComicSorter(response.data, req.query.order, req.query.letter, "per char")))
            .catch(error => {res.status(404).json(error.response)})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;