/*
 * @Author: duchengdong
 * @Date: 2020-11-14 16:31:01
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-23 22:06:57
 * @Description: 
 */
// models/plant.js

module.exports = (sequelize, DataTypes) => sequelize.define(
  'plant', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    introduce: {
      type: DataTypes.STRING(2000),
    },
    thumbUrl: {
      type: DataTypes.STRING,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING(32),
    },
    survive: {
      type: DataTypes.STRING(100),
    },
    season: {
      type: DataTypes.STRING(32),
    },
    temperature: {
      type: DataTypes.STRING(32),
    },
    sunshine: {
      type: DataTypes.STRING(100),
    },
    water: {
      type: DataTypes.STRING(100),
    },
    genusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'plant',
  },
);