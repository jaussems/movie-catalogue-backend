const express = require("express");
const { user } = require("../database/models");
const bodyParser = require('body-parser');
const { toJWT } = require('../auth/jwt');
const { Router } = express;
const bcrypt = require('bcrypt');
const router = new Router();
router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    // 1. find user based on email address
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
        // 3. if the password is correct, return a JWT with the userId of the user (user.id)
        const jwt = toJWT({ userId: userFound.id });
        console.log(req.headers)
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