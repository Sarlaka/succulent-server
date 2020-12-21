/*
 * @Author: duchengdong
 * @Date: 2020-11-12 17:28:25
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-16 18:50:24
 * @Description: 
 */
'use strict';
const Hapi = require('@hapi/hapi');
require('env2')('./.env');
const config = require('./config');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination');
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');


const routesHelloHapi = require('./routes/hello-hapi');
const succulentRoute = require('./routes/succulent');
const usersRoute = require('./routes/users');

const server = Hapi.server({
    port: config.port,
    host: config.host,
    debug: {
        request: ['error']
    }
});

const init = async () => {
    // 祖册插件
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2
    ]);
    pluginHapiAuthJWT2(server);
    // 注册路由
    server.route([
        // 创建一个简单的 hello hapi 接口
        ...routesHelloHapi,
        ...succulentRoute,
        ...usersRoute
    ]);
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();