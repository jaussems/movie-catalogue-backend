'use strict';
const {
  Model
} = require('sequelize');
const movie_item = require('./movie_item');
module.exports = (sequelize, DataTypes) => {
  class movie_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // movie_list.belongsTo(models.user, { foreignKey: 'userId' });
      movie_list.hasMany(models.movie_item);
      movie_list.belongsToMany(models.user_movie_list_connection, { foreignKey: 'listId' })

    }
  }
  movie_list.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie_list',
  });
  return movie_list;
};