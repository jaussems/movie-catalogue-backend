const { user, movieList, movieItem } = require("./database/models");

async function listsWithUsers() {
    const lists = await movieList.findAll({
        raw: true,
        include: [movieItem],
    });

    console.log(lists)
}

listsWithUsers()