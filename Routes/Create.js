// Import of express
const express = require('express');
const router = express.Router();

// Import of the User model
const User = require('../Models/Users');

// Import of sign-up / log-in packages
const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

// Import of the usefull functions
const Countries = require("../Functions/Countries"); // function to check that input country exists
const Password = require("../Functions/Password"); // function to check password robustness

// Route allowing to create account = post route
// Expects firstname, lastname, emailaddress, password, birthdate, specialoffers, newsletter, country
router.post('/create', async(req, res) => {
    try {
        const {firstname, lastname, emailaddress, password, birthdate, specialoffers, newsletter, country} = req.fields;
        
        if(firstname && lastname && emailaddress && password && birthdate && country) {
            const salt = uid2(16);
            const hash = SHA256(password + salt).toString(encBase64);
            const token = uid2(16);
            
            if(Countries(country) && Password(password)[0]) {
                const newUser = new User(
                    {
                        firstname: firstname,
                        lastname: lastname,
                        emailaddress: emailaddress,
                        birthdate: birthdate,
                        specialoffers: specialoffers,
                        newsletter: newsletter,
                        country: country,
                        salt: salt,
                        hash: hash,
                        token: token,
                    }
                    )
                await newUser.save();
                res.status(200).json("Account created successfully");

            } else {
                let response = [];
                if(!Countries(country)) {
                    response.push("The country that you've entered doesn't exist");
                } 
                if(!Password(password)[0]) {
                    response.push(Password(password)[1]);
                }
                res.status(400).json(response)
            }
    
        } else {
            let missingfields = [];
            // firstname && lastname && emailaddress && password && birthdate && country
            if(!firstname) {
                missingfields.push("First name")
            }
            if(!lastname) {
                missingfields.push("Last name")
            }
            if(!emailaddress) {
                missingfields.push("Email address")
            }
            if(!password) {
                missingfields.push("Password")
            }
            if(!birthdate) {
                missingfields.push("Birth date")
            }
            if(!country) {
                missingfields.push("Country")
            }
            res.status(400).json({message: "There are missing or incorrect fields", list: missingfields})
        }
        
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports = router;