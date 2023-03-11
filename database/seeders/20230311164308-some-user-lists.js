'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("user_lists", [
      {
        movieId: 505642,
        listId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movieId: 299536,
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
    await queryInterface.bulkDelete("users_lists", null, {});
  }
};
