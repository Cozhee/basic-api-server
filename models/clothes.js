'use strict'

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('clothes', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.ENUM('Top', 'Bottom', 'Shoes', 'Accessory'),
      allowNull: false
    }
  });
}
