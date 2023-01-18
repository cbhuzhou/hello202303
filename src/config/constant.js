module.exports = {
    // 密码加密 秘钥
    PASSWORD_SECRET: 'WJiol_8776#',
    // jwt密钥
    JWT_SECRET: 'secret_for-json#web$token',
    // jwt可忽略的path:全部忽略即可，需要登录验证的，自己用loginCheck
    JWT_IGNORE_PATH: [/\//],
    // 查询列表，默认分布配置
    DEFAULT_PAGE_SIZE: 8
}