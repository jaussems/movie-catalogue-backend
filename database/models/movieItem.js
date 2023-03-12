'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movieItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movieItem.belongsToMany(models.movieList, { through: models.userList, foreignKey: "movieId" })
    }
  }
  movieItem.init({
    title: DataTypes.STRING,
    genre_ids: DataTypes.ARRAY(DataTypes.INTEGER),
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    poster_path: DataTypes.STRING,
    vote_average: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'movieItem',
  });
  return movieItem;
};