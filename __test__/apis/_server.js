const axios = require('axios')
const supertest = require('supertest')
const { isTestRemote, isTestLocal } = require('../../src/utils/env')

let request
if (isTestLocal) {
    // 本地测试才使用
    const server = require('../../src/app').callback() //eslint-disable-line
    request = supertest(server)
}
// 存储登录token,统一拼接
let TOKEN = ''
    // 测试机host
const REMOTE_HOST = 'http://182.92.102.22:8081' //
    /**
     *
     * */
async function ajax(method = 'get', url = '', bodyOrParams = {}, headers = {}) {
    // headers加token
    if (headers.Authorization == null) {
        Object.assign(headers, {
            Authorization: `Bearer ${TOKEN}`
        })
    }
    let result
        // 本地测试，使用supertest
    if (isTestLocal) {
        let res
        if (method === 'get') {
            res = await request[method](url).query(bodyOrParams).set(headers)
        } else {
            res = await request[method](url).send(bodyOrParams).set(headers)
        }
        result = res.body
    }
    // 远程测试，使用axios,访问测试机
    if (isTestRemote) {
        const remoteUrl = `${REMOTE_HOST}${url}`
        const conf = {
            method,
            url: remoteUrl,
            headers
        }
        if (method === 'get') {
            conf.params = bodyOrParams
        } else {
            conf.data = bodyOrParams
        }
        const res = await axios(conf)
        result = res.data
    }
    // 返回结果
    return result // {data,errno}
}

module.exports = {
    setToken(token) {
        console.log('setToken...', token)
        TOKEN = token
    },
    asyncget(url, params) {
        const res = await ajax('get', url, params)
        return res
    },
    async post(url, body) {
        const res = await ajax('post', url, body)
        return res
    },
    async patch(url, body) {
        const res = await ajax('patch', url, body)
        return res
    },
    async del(url, body) {
        const res = await ajax('delete', url, body)
        return res
    }
}