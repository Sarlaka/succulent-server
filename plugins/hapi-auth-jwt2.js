const config = require('../config');

const validate = (decoded, request, h) => {
  let error;
  /*
    接口 POST /users/createJWT 中的 jwt 签发规则

    const payload = {
      userId: jwtInfo.userId,
      exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60,
    };
    return JWT.sign(payload, process.env.JWT_SECRET);
  */

  // decoded 为 JWT payload 被解码后的数据
  const userId = decoded.userId || {};

  if (!userId) {
    return { isValid: false }
  }
  const credentials = {
    userId,
  };
  // 在路由接口的 handler 通过 request.auth.credentials 获取 jwt decoded 的值
  return { isValid: true,credentials };
};

module.exports = (server) => {
  server.auth.strategy('jwt', 'jwt', {
    key: config.jwtSecret,
    validate,
  });
  server.auth.default('jwt');
};