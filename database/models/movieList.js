'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movieList.belongsToMany(models.movieItem, { through: models.userList, foreignKey: 'listId' });
      movieList.belongsTo(models.user);
    }
  }
  movieList.init({

  }, {
    sequelize,
    modelName: 'movieList',
  });
  return movieList;
};