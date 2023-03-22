router.get("/", async (req, res, next) => {
    const auth = req.headers.authorization && req.headers.authorization.split(" ");
    if (auth && auth[0] === "Bearer" && auth[1]) {
        try {
            res.status(203).send('You are authorized!')
        } catch (e) {
            res.status(400).send("Invalid JWT token");
        }
    } else {
        res.status(401).send({
            message: "Please supply some valid credentials",
        });
    }
});