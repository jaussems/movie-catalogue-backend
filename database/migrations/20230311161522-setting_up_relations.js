'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user_lists", "movieId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movie_items",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("user_lists", "listId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movie_lists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
    await queryInterface.addColumn("movie_lists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user_lists", "movieId")
    await queryInterface.removeColumn("user_lists", "listId")
    await queryInterface.removeColumn("movie_lists", "userId")

  }
}