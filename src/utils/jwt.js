const { JWT_SECRET } = require('../config/constant')

/**
 * jwt - verify sign
 * /

const util = require('util')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/constant')
const { jwtExpiresIn } = require('../config/index')
const verify = util.promisify(jwt.verify)
async function jwtVerify(token) {
    const data = await verify(token.split(' ')[1], JWT_SECRET) // 去掉前面的
    return data
}

/**
 * jwt sign
 * {Object} data data
 */
function jwtSign(data) {
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: jwtExpiresIn })
    return token
}

module.exports = {
    jwtVerify,
    jwtSign
}