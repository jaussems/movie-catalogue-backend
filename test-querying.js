const movieItem = require("./database/models").movie_item;


async function createSampleMovieList() {
    try {
        const findMovieById = await movieItem.findOne({ where: { id: 599019 } })
        //console.log(movieItem);

        //const movieItemList = movieItem;

        //const findMovieById = await movieItem.findAll();

        return findMovieById


    } catch (e) {
        console.error(e);
    }
}

createSampleMovieList().then(movie => console.log(movie));