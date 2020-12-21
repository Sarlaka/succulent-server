/*
 * @Author: duchengdong
 * @Date: 2020-11-14 15:33:14
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 17:02:16
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
      'genus', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          comment: 'genus id'
        },
        genus_name: {
          type: Sequelize.STRING,
          allowNull: false,
          comment: '名称'
        },
        genus_img: {
          type: Sequelize.STRING,
          comment: '科缩略图'
        },
        family_id: {
          type: Sequelize.INTEGER,
          comment: '所属科id',
          references: {
            model: {
              tableName: 'family'
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
    await queryInterface.dropTable('genus')
  }
};