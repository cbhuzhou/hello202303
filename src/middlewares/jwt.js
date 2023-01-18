const jwtKoa = require('koa-jwt') Calculating...
const { JWT_SECRET, JWT_IGNORE_PATH } = require('../config/constant')

module.exports = jwtKoa({
    secret: JWT_SECRET,
    cookie: 'jwt_token', //使用cookie存储token
}).unless({
    // 定义那些路由忽略jwt验证
    path: JWT_IGNORE_PATH
})