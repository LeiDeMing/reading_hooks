// const Koa = require('koa')
// const router = require('./router')
// const app = new Koa()

// app
//     .use(logger)
//     .use(router.routes())
//     .use(router.allowedMethods())

// app.listen(1521, () => {
//     console.log('server start at 1521');
// })
// const test = require('./config/test')
const logger = require('./middlewares/log')
const config = require('./config')
const {
    dbOpen
} = require('./lib/db/connect')
const read = require('./lib/db/read')
const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({
    path: config.path,
    secret: config.readingSecret
})

dbOpen()

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 200
        logger.info(`[info]：Success！`)
        res.end('Success！')
    })
}).listen(1521)

handler.on('error', function (err) {
    logger.info(`[Error]：${err.message}`)
})

handler.on('push', function (event) {
    logger.info(`[push]：${JSON.stringify(event.payload)}`)
})

handler.on('issues', async (event) => {
    if (event.payload) {
        const {
            action,
            issue
        } = event.payload
        if (action === 'opened') {
            await read.addData(issue, event.payload)
        }
    }
    logger.info(`[issues]：${JSON.stringify(event.payload)}`)
})
// read.addData(test.issue, test)