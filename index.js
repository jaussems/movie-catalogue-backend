const express = require('express');
const bodyParser = require('body-parser')

const User = require("./database/models").user;
const Movie_Item = require("./database/models").movie_item;
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.get("movies", async (req, res) => {
    const movies = await Movie_Item.findAll();
    res.send(movies);
})


app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})
