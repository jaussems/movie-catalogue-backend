'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("movie_lists", [
      {
        name: 'Dan\'s List',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        name: 'John\'s List',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])



    await queryInterface.bulkInsert("list_item_connections", [
      {
        movieId: 505642,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 505642,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 843794,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 505642,
        listId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movie_lists", null, {});
    await queryInterface.bulkDelete("list_item_connections", null, {});
  }
};
