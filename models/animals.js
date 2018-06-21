'use strict';

module.exports = function(sequelize, DataTypes){
    const animals = sequelize.define('animals', {
       animal_type: {
           type: DataTypes.STRING,
           allowNull: false
       },
       animal_breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
     animal_age: {
        type: DataTypes.STRING,
        allowNull: true
    },
    available: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})
}