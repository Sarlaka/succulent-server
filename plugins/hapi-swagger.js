/*
 * @Author: duchengdong
 * @Date: 2020-11-09 17:36:56
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-13 18:31:04
 * @Description: 
 */
const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
    inert,
    vision,
    {
        plugin: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: package.version,
            },
            // 定义接口以 tags 属性定义为分组
            grouping: 'tags',
            tags: [{
                name: 'tests',
                description: '测试相关'
            }, ]
        }
    }
]