'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // user.hasMany(models.movieList, { foreignKey: 'userId' });
      // user.belongsToMany(models.movieItem, { through: models.list_item_connection, foreignKey: 'userId' });
      user.hasMany(models.movieList, { foreignKey: 'userId' });
      //  { through: models.list_item_connection, foreignKey: 'userId' }

      // define association here
    }
  }
  user.init({
    fullName: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    phone: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};