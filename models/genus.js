/*
 * @Author: duchengdong
 * @Date: 2020-11-14 16:28:10
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-23 18:28:50
 * @Description: 
 */
// models/genus.js

module.exports = (sequelize, DataTypes) => sequelize.define(
    'genus', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        genusName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genusImg: {
            type: DataTypes.STRING,
        },
        familyId: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'genus',
    },
);