const cors = require('koa-cors')
const { corsOrigin } = require('../config/index')

module.exports = cors({
    origin: ctx => {
        // 非线上环境，无cors限制
        if (corsOrigin === '*') return '*'
            // 线上环境
        const ref = ctx.header.referer || ''
        const originArr = corsOrigin.split(',').map(s => s.trim()) // 转为数组
        const originArrByRef = originArr.filter(s => ref.indexOf(s) === 0)
        if (originArrByRef.length > 0) return originArrByRef[0]
            // 其他情况
        return false
    },
    credentials: true // 允许跨域带cookie
})