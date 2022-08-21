// Route allowing to retrieve characters
    // Expects as request (optional) : page (which is converted into skip), limit (max number of characters per page) and search (which is converted into name)
    // Expected output is an object containing :
        // count => the number of characters matching the search (used to get total number of pages)
        // limit => the number of characters per page
        // results => an array containing all characters => itself contains one element per character, containing
            // thumbnail containing => final result should be path + "." + extension
                // path => the image url
                // extension => the extension to be added
            // comics => an array containing the list of comics ids associated with the character
            // _id => the character id
            // name => the character name
            // description => the character description
            // __v => to be defined
// Example : 3-D Man

// Import of express
const express = require('express');
const router = express.Router();

// Import of axios
const axios = require("axios")

router.get("/characters", async(req, res) => {
    try {
        let query = `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
        let skip = "";
        if(req.query.page > 1) {skip = (req.query.page - 1) * 100}
        if(skip) {query = query + `&skip=${skip}`}
        if(req.query.limit) {query = query + `&limit=${req.query.limit}`}
        if(req.query.search) {query = query + `&name=${req.query.search}`}

        await axios.get(query)
            .then((response) => res.status(200).json(response.data))
            .catch(error => {res.status(404).json(error.response)})

    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router