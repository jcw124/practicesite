'use strict';

module.exports = function(sequelize, DataTypes){
    const inventory = sequelize.define('inventory', {
       item_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       item_description: {
           type: DataTypes.TEXT,
           allowNull: false
       },
       category: {
           type: DataTypes.STRING,
           allowNull: false
       },
       price: {
           type: DataTypes.DECIMAL,
           allowNull: false
       },
       available: {
           type: DataTypes.INTEGER,
           allowNull: false
       }, 
       limit: {
          type: DataTypes.INTEGER,
           allowNull: true
       }
    })
}