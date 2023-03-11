'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movie_items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre_ids: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      overview: {
        type: Sequelize.TEXT
      },
      release_date: {
        type: Sequelize.DATE
      },
      poster_path: {
        type: Sequelize.STRING
      },
      vote_average: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movie_items');
  }
};