/*
 * @Author: duchengdong
 * @Date: 2020-11-10 11:45:29
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-14 15:05:20
 * @Description: 
 */
if (process.env.NODE_ENV === 'production') {
    require('env2')('./.prod.env');
} else {
    require('env2')('./.env');
}


const {
    env
} = process;

module.exports = {
    "development": {
        "username": env.MYSQL_USERNAME,
        "password": env.MYSQL_PASSWORD,
        "database": env.MYSQL_DB_NAME,
        "host": env.MYSQL_HOST,
        "port": env.MYSQL_PORT,
        "dialect": "mysql"
    },
    "production": {
        "username": env.MYSQL_USERNAME,
        "password": env.MYSQL_PASSWORD,
        "database": env.MYSQL_DB_NAME,
        "host": env.MYSQL_HOST,
        "port": env.MYSQL_PORT,
        "dialect": "mysql"
    }
}