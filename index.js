const express = require('express');
const bodyParser = require('body-parser')

const User = require("./database/models").user;
const movieItem = require("./database/models").movieItem;
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})

app.get("/movieItems", async (req, res) => {
    const movieItems = await movieItem.findAll();
    res.send(movieItems);
})

app.get("movies", async (req, res) => {
    const movies = await movieItem.findAll();
    res.send(movies);
})


app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})
