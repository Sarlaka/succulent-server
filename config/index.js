/*
 * @Author: duchengdong
 * @Date: 2020-11-09 16:09:34
 * @LastEditors: duchengdong
 * @LastEditTime: 2020-11-11 18:26:08
 * @Description: 
 */
const {
    env
} = process;
module.exports = {
    host: env.HOST,
    port: env.PORT,
    jwtSecret: env.JWT_SECRET,
    appId: env.APPID,
    appSecret : env.APPSECRET
}