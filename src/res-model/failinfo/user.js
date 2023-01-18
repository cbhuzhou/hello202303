module.exports = {
    // 登录检验失败
    loginCheckFailInfo: {
        errno: 12001,
        message: '登录检验失败'
    },
    // 发送短信验证码过于频繁
    sendVeriCodeFrequentlyFailInfo: {
        errno: 12002,
        message: '请匆频繁获取短信验证码'
    },
    // 发送短信验证码错误
    sendVeriCodeErrorFailInfo: {
        errno: 12003,
        message: '发送短信失败，请稍后重试'
    }
}