const express = require("express");
const { user } = require("../database/models");
const bodyParser = require('body-parser');
const { toJWT, toData } = require('../auth/jwt');
const { Router } = express;

const router = new Router();
router.use(bodyParser.json());

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const findUserEmail = await user.findOne({ where: { email: email } });

    if (!email && password) {
        res.status(403).send('Invalid request, email not found ');
    }
    if (findUserEmail) {
        // res.status(201).send(findUserEmail);
        res.send({
            jwt: toJWT({ userId: 1 }),
        });
    }


})



router.get("/login", (request, response) => response.send("Welcome to the loginpage!"));


module.exports = router;