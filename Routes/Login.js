// Import of express
const express = require('express');
const router = express.Router();

// Import of the User model
const User = require('../Models/Users');

// Import of sign-up / log-in packages
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");

// Route allowing user to login => get
// Expects logemail and logpassword as input
// Normal output is an object containing firstname, lastname, emailaddress, birthdate, country, token

router.get('/login', async(req, res) => {
    try {
        const {logemail, logpassword} = req.fields;
        if(logemail && logpassword) {
            const LoggedUser = await User.find({emailaddress: logemail});
            if(!LoggedUser) {
                res.status(400).json({message: "There aren't registered users with this email"})
            } else {
                const {firstname, lastname, emailaddress, birthdate, specialoffers, newsletter, country, salt, hash, token} = LoggedUser[0];
                const loghash = SHA256(logpassword + salt).toString(encBase64);
                if(loghash === hash) {
                    res.status(200).json({firstname, lastname, emailaddress, birthdate, country, token})
                } else {
                    res.status(400).json({message: "The password that you've entered is incorrect"})
                }
            }
        } else {
            let missingfields = [];
            if(!logemail) {
                missingfields.push("Email")
            }
            if(!logpassword) {
                missingfields.push("Password")
            }
            res.status(400).json({message: "There are missing or incorrect fields", list: missingfields})
        }
        
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;