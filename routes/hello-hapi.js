/*
 * @Author: duchengdong
 * @Date: 2020-11-09 16:10:11
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-16 23:28:38
 * @Description: 
 */
module.exports = [{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'hello hapi'
    },
    config: {
        auth: false,
        tags: ['api', 'tests'],
        description: '测试hello-hapi',
    },
}, {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: true
        }
    },
    config: {
        auth: false
    }
}]