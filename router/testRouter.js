const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/", (request, response) => response.send("Welcome to the homepage!"));

module.exports = router;