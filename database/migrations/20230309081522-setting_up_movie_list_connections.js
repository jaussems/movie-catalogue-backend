'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("user_movie_list_connections", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("user_movie_list_connections", "listId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movie_lists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
    await queryInterface.addColumn("movie_lists", "list_item_reference_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "movie_items",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("user_movie_list_connections", "userId");
    await queryInterface.removeColumn("user_movie_list_connections", "listId");
    await queryInterface.removeColumn("movie_lists", "list_item_reference_id");

  }
};
