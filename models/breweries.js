const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Breweries extends Model {}


module.exports = Breweries;