const { jwtVerify } = require('../utils/jwt')
const { ErrorRes } = require('../res-model/index')
const { loginCheckFailInfo } = require('../res-model/failInfo/index')

module.exports = async function loginCheck(ctx, next) {
    // 失败信息
    const errRes = new ErrorRes(loginCheckFailInfo)
        // const errRes = {
        //         errno: 10000, // 非0
        //         message: 'xxxx'
        //     }
        // 获取token
    const token = ctx.header.authorization
    if (!token) {
        ctx.body = errRes
        return
    }
    let flag = true
    try {
        const userInfo = await jwtVerify(token)
        delete userInfo.password // 屏蔽密码
            // 验证成功，获取userInfo
        ctx.userInfo = userInfo
    } catch (ex) {
        flag = false
        ctx.body = errRes
    }
}