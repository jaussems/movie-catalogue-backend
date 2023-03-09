'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("list_item_connections", "movieId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movie_items",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("list_item_connections", "listId", {
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
    await queryInterface.removeColumn("list_item_connections", "movieId")
    await queryInterface.removeColumn("list_item_connections", "listId")
    await queryInterface.removeColumn("movie_lists", "userId")

  }
};
