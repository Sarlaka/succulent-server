/*
 * @Author: duchengdong
 * @Date: 2020-11-14 15:02:59
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-24 10:17:36
 * @Description: 
 */
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const configs = require(__dirname + '/../config/config.json');
const config = {
  ...configs[env],
  define: {
    underscored: true,
  },
}
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// 外键关联
db['plant'].belongsTo(db['genus'], {
  as: 'genus',
  foreignKey: 'genus_id',
  targetKey: 'id'
});
db['genus'].belongsTo(db['family'], {
  as: 'family',
  foreignKey: 'family_id',
  targetKey: 'id'
});
// 关联表

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;