const strRule = {
    type: 'string',
    maxLength: 255
}

const numRule = {
    type: 'number'
}

module.exports = {
    type: 'object',
    // 用户信息要符合channelModel
    required: ['name'],
    properties: {
        name: strRule,
        workId: numRule
    }
}