const express = require("express");
const { user } = require("../database/models");
const bodyParser = require('body-parser');
const { toJWT } = require('../auth/jwt');
const { Router } = express;
const bcrypt = require('bcrypt');
const router = new Router();
router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const userFound = await user.findOne({
        where: {
            email: email,
        },
    });
    if (!userFound) {
        res.status(400).send({
            message: "User with that email does not exist",
        });
    }

    else if (bcrypt.compareSync(password, userFound.password)) {
        const jwt = toJWT({ userId: userFound.id });
        res.send({
            jwt,
        });
    } else {
        res.status(400).send({
            message: "Password was incorrect",
        });
    }






})



router.get("/login", (request, response) => response.send("Welcome to the loginpage!"));


module.exports = router;