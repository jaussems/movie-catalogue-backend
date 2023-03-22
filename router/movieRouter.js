const express = require("express");
const { movieItem } = require("../database/models");
const { Router } = express;
const authMiddleware = require('../middleware/auth');

const router = new Router();


router.get("/movieItems", authMiddleware, async (req, res) => {
    const movieItems = await movieItem.findAll();
    res.send(movieItems);
})

router.get("movies", authMiddleware, async (req, res) => {
    const movies = await movieItem.findAll();
    res.send(movies);
})


module.exports = router;