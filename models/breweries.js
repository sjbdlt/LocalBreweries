const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breweries extends Model {}

Breweries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    refid: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    State: {
      type: DataTypes.STRING,
      allowNull: false,
  },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'breweries',
  }
);

module.exports = Breweries;
