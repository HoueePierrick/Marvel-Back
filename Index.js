// Import of express
const express = require("express");
const app = express();

// Import of express-formidable
const formidable = require("express-formidable");
app.use(formidable());

// Import of CORS
const cors = require("cors");
app.use(cors());

// Import of dotenv
require('dotenv').config();

// Import of Mongoose
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.MONGDB_USR}:${process.env.MONGODB_PASS}@clustertestph.lyjon.mongodb.net/test`);

// Routes

// Route allowing to retrieve characters = get route
const Characters = require('./Routes/Characters');
app.use(Characters);

// Route allowing to retrieve comics associated with a character = get route
const ComicsPerChar = require('./Routes/ComicsPerChar');
app.use(ComicsPerChar);

// Route allowing to retrieve comics = get route
const Comics = require('./Routes/Comics');
app.use(Comics);

// Route allowing to create account = post route
const Create = require('./Routes/Create');
app.use(Create);

// Route allowing user to login => get
const Login = require('./Routes/Login');
app.use(Login);

// Route to add characters in favorites
const AddFavorChars = require('./Routes/FavoriteCharacters/AddFChar');
app.use(AddFavorChars);

// Route to remove characters in favorites
const RemoveFavorChars = require('./Routes/FavoriteCharacters/RemoveFChar');
app.use(RemoveFavorChars);

// Route to see characters in favorites
const SeeFavorChars = require('./Routes/FavoriteCharacters/SeeFChar');
app.use(SeeFavorChars);

// Route to add comics in favorites
const AddFavorCom = require('./Routes/FavoriteComics/AddFComic');
app.use(AddFavorCom);

// Route to remove comics in favorites
const RemoveFavorCom = require('./Routes/FavoriteComics/RemoveFComic');
app.use(RemoveFavorCom);

// Route to see comics in favorites
const SeeFavorCom = require('./Routes/FavoriteComics/SeeFComic');
app.use(SeeFavorCom);

// Catch all other routes
app.all("*", (req, res) => {
    res.json({message: "This route doesn't exist"})
})

// Listen
app.listen(process.env.PORT, () => {
    console.log("Server started")
})