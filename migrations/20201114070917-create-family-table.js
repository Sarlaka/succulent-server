/*
 * @Author: duchengdong
 * @Date: 2020-11-14 15:09:17
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 17:02:06
 * @Description: 
 */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'family', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment:'family id'
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          comment:'名称'
        },
        family_name: {
          type: Sequelize.STRING,
          allowNull: false,
          comment:'科名称'
        },
        family_img:{
          type: Sequelize.STRING,
          comment:'科缩略图'
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('family')
  }
};

// CREATE TABLE `family` (
//   `familyId` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
//   `name` varchar(64) DEFAULT NULL COMMENT '名称',
//   `familyName` varchar(100) DEFAULT NULL COMMENT '科名称',
//   `familyImg` varchar(100) DEFAULT NULL COMMENT '科图片',
//   PRIMARY KEY (`familyId`)
// ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;