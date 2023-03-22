const express = require('express');
const bodyParser = require('body-parser')
const User = require("./database/models").user;
const movieItem = require("./database/models").movieItem;
const authRouther = require('./router/authRouter');
const testRouter = require('./router/testRouter');
const movieRouter = require('./router/movieRouter');
const authMiddleware = require('./middleware/auth');
const app = express();

const PORT = 4000;
app.use(bodyParser.json());
app.use(testRouter);

app.use("/auth", authRouther);

app.use("/", movieRouter);



app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.send(users);
})



// app.get("/movieItems", async (req, res) => {
//     const movieItems = await movieItem.findAll();
//     res.send(movieItems);
// })

// app.get("movies", async (req, res) => {
//     const movies = await movieItem.findAll();
//     res.send(movies);
// })


app.post("/", (req, res) => {
    console.log(req.body);
    res.json({
        message: "We received your request body!",
    });
});




app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`)
})
