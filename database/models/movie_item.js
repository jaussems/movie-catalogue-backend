'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie_item.init({
    title: DataTypes.STRING,
    genre_ids: Sequelize.Array(DataTypes.INTEGER),
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    poster_path: DataTypes.STRING,
    vote_average: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movie_item',
  });
  return movie_item;
};