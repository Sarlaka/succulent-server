/*
 * @Author: duchengdong
 * @Date: 2020-11-16 10:54:35
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-16 14:00:03
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
      'users', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nick_name: Sequelize.STRING,
        avatar_url: Sequelize.STRING,
        gender: Sequelize.INTEGER,
        union_id: Sequelize.STRING,
        open_id: Sequelize.STRING,
        session_key: Sequelize.STRING,
        count: Sequelize.INTEGER,
        status: Sequelize.INTEGER,
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
    await queryInterface.dropTable('users')
  }
};