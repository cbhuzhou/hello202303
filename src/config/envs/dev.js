// dev 配置

module.exports = {
    // mysql配置
    mysqlConf: {
        host: 'localhost',
        user: 'root',
        password: 'Mysql_2019',
        port: '3306',
        database: 'imooc-lego-course'
    },
    // mongodb连接配置
    mongodbConf: {
        host: 'localhost',
        port: '27017',
        dbName: 'imooc-lego-course'
    },
    // redis连接配置
    redisConf: {
        port: '6379',
        host: '127.0.0.1'
    }
}