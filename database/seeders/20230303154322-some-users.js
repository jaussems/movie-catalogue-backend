'use strict';

const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../../config/constants");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "David Hoens",
          email: "davidh@messi.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "John Abramov",
          email: "johnabramov@redux.com",
          phone: 1234567,
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
