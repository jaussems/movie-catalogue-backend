const express = require('express');
const { user: User } = require('../database/models');
const bcrypt = require('bcrypt');

const { Router } = require('express');

const router = new Router();

router.post('/user', async (req, res, next) => {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
        res.status(400).send("missing parameters");
    } else {
        const newUser = await User.create({
            email,
            fullName,
            // Here, when handing down the password to the create method we hash it.
            password: bcrypt.hashSync(password, 10),

        });

        res.json(newUser);
    }
})

module.exports = router;