const { email, password, name } = req.body;
if (!email || !password || !name) {
    res.status(400).send("missing parameters");
} else {
    const newUser = await User.create({
        email,
        name,
        // Here, when handing down the password to the create method we hash it.
        password: bcrypt.hashSync(password, 10),

    });

    res.json(newUser);
}