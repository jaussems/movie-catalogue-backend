'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class list_item_connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      list_item_connection.belongsToMany(models.movie_item);
      list_item_connection.belongsToMany(models.movie_list);
    }
  }
  list_item_connection.init({

  }, {
    sequelize,
    modelName: 'list_item_connection',
  });
  return list_item_connection;
};