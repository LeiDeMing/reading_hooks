const {
    Read
} = require('./model')
const logger = require('../../middlewares/log')

module.exports = {
    async addData(issue, payload_all) {
        const {
            url,
            title,
            html_url,
            number,
            body
        } = issue
        let result
        try {
            result = Read.create({
                url,
                title,
                html_url,
                number,
                body,
                payload_all: JSON.stringify(payload_all)
            })
        } catch (e) {
            logger.info(`[mongo Error]：${JSON.stringify(e)}`)
        }
        return result
    }
}