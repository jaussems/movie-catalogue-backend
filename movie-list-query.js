const { user, movieList, movieItem, userList } = require("./database/models");

async function listsWithUsers() {
    const lists = await movieList.findAll({
        where: { userId: 2 },
        raw: true,
        include: [movieItem],
    });

    const User = await user.findOne(
        {
            where: { id: 2 },
            raw: true
        }
    )

    console.log(lists, `USER: `, User)
}

listsWithUsers()