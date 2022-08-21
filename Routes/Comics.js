// Route allowing to retrieve comics = get route
    // Expects as request (optional) : page (which is converted into skip), limit (max number of comics per page) and search (which is converted into title)
    // Also can accept as request : order ("inverted to inverse letters"), letter (to filter titles by first letter)
    // Returns an object containing :
        // count => number of comics matching the search
        // limit => number of comics per page
        // results => an array containing objects containing
            // thumbnail containing => final result should be path + "." + extension
                // path => the image url
                // extension => the extension to be added
            // comics => array containing objects => 
                // _id => comic id
                // title => comic title
                // description => comic description
                // __v => to be defined

// Example : Avengers: The Initiative (2007) #14

// Import of express
const express = require('express');
const router = express.Router();

// Import of axios
const axios = require("axios")

router.get("/comics", async(req, res) => {
    try {
        let query = `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
        let skip = "";
        if(req.query.page > 1) {skip = (req.query.page - 1) * 100}
        if(skip) {query = query + `&skip=${skip}`}
        if(req.query.limit) {query = query + `&limit=${req.query.limit}`}
        if(req.query.search) {query = query + `&title=${req.query.search}`}

        await axios.get(query)
            .then((response) => res.status(200).json(response.data))
            .catch(error => {res.status(404).json(error.response)})
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;