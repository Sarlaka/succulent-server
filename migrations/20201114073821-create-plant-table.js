/*
 * @Author: duchengdong
 * @Date: 2020-11-14 15:38:21
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 17:02:39
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
      'plant', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
          comment: 'plant id'
        },
        name: {
          type: Sequelize.STRING,
          comment: '名称'
        },
        title: {
          type: Sequelize.STRING,
          comment: '标题'
        },
        introduce: {
          type: Sequelize.STRING(2000),
          comment: '介绍'
        },
        thumb_url: {
          type: Sequelize.STRING,
          comment: '缩略图'
        },
        img_url: {
          type: Sequelize.STRING,
          comment: '大图'
        },
        breed: {
          type: Sequelize.STRING(32),
          comment: '繁殖'
        },
        survive: {
          type: Sequelize.STRING(100),
          comment: '存活度'
        },
        season: {
          type: Sequelize.STRING(32),
          comment: '季节'
        },
        temperature: {
          type: Sequelize.STRING(32),
          comment: '温度'
        },
        sunshine: {
          type: Sequelize.STRING(100),
          comment: '日照'
        },
        water: {
          type: Sequelize.STRING(100),
          comment: '浇水量'
        },
        genus_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          comment: '所属属id',
          references: {
            model: {
              tableName: 'genus'
            },
            key: 'id'
          },
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
    await queryInterface.dropTable('plant')
  }
};