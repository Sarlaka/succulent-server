/*
 * @Author: duchengdong
 * @Date: 2020-11-14 16:28:10
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 16:34:13
 * @Description: 
 */
// models/family.js

module.exports = (sequelize, DataTypes) => sequelize.define(
    'family', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        familyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        familyImg: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'family',
    },
);