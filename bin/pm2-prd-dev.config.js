/**
 * pm2 配置文件，dev测试机
 **/

const appConf = require('./pm2AppConf')
    // 为测试方便，pm2进程设置为1
appConf.instances = 1

module.exports = {
    apps: [appConf]
}