/*
 * @Author: duchengdong
 * @Date: 2020-11-11 15:22:02
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-16 14:00:19
 * @Description: 
 */
module.exports = (sequelize, DataTypes) => sequelize.define(
    'users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nick_name: DataTypes.STRING,
        avatar_url: DataTypes.STRING,
        gender: DataTypes.INTEGER,
        union_id: DataTypes.STRING,
        open_id: DataTypes.STRING,
        session_key: DataTypes.STRING,
        count: {
            type: DataTypes.INTEGER,
            defaultValue: 5,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        }
    }, {
        tableName: 'users',
    },
);