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
      // movie_item.belongsToMany(models.movie_list, { foreignKey: 'listId' })
      movie_item.belongsTo(models.list_item_connection, { foreignKey: 'movieId' });

    }
  }
  movie_item.init({
    title: DataTypes.STRING,
    vote_average: DataTypes.INTEGER,
    genre_ids: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    poster_path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie_item',
  });
  return movie_item;
};