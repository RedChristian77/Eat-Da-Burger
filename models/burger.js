'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    id: DataTypes.INTEGER,
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {});
  Burger.associate = function(models) {
    // associations can be defined here
  };
  return Burger;
};