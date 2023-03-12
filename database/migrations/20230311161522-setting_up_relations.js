'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("userLists", "movieId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movieItems",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })

    await queryInterface.addColumn("userLists", "listId", {
      type: Sequelize.INTEGER,
      references: {
        model: "movieLists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
    await queryInterface.addColumn("movieLists", "userId", {
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
    await queryInterface.removeColumn("userLists", "movieId")
    await queryInterface.removeColumn("userLists", "listId")
    await queryInterface.removeColumn("movieLists", "userId")

  }
}