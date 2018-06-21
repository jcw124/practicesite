'use strict';

module.exports = function(sequelize, DataTypes){
    const appointments = sequelize.define('appointments', {
       pet_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       owner_name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       date: {
           type: DataTypes.DATEONLY,
           allowNull: false
       },
       time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    services: {
        type: DataTypes.STRING,
        allowNull: false
    }
       
    })
}