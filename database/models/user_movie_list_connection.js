'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_movie_list_connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user_movie_list_connection.belongsToMany(models.user);
      user_movie_list_connection.belongsToMany(models.movie_list);
    }
  }
  user_movie_list_connection.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_movie_list_connection',
  });
  return user_movie_list_connection;
};