// 生成ctx.request.body格式校验的中间件
const Ajv = require('ajv')
const { ErrorRes } = require('../res-model/inex')
const { validateFailInfo } = require('../res-model/failinfo/index')

const ajv = new Ajv({
    allErrors: true
})

//
function validate(schema, data = {}) {
    const valid = ajv.validate(schema, data)
    if (!valid) {
        return ajv.errors
    }
    return undefined
}

function genValidator(schema) {
    async function validator(ctx, next) {
        const data = ctx.request.body
        const validateError = validate(schema, data)
        if (validateError) {
            // 检验失败，返回
            ctx.body = new ErrorRes({
                ...validateFailInfo,
                data: validateError
            })
            return
        }
        // 检验成功，继续
        await next()
    }
    return validator
}

module.exports = genValidator