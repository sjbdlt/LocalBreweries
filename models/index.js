const User = require('./User');
const Breweries = require('./Breweries');

User.hasMany(Breweries, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Breweries };
