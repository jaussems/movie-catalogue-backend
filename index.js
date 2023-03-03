const express = require('express');
const User = require("./database/models").user;
const app = express();
const PORT = 4000;



app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})


app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})
