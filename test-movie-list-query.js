const User = require("./database/models").user;
const MovieList = require("./database/models").movie_list;
const MoveItem = require("./database/models").movie_item;

async function listsWithUsers() {
    const lists = await MovieList.findAll({
        raw: true,
        include: [MoveItem],
    });

    console.log(lists)
}

listsWithUsers()