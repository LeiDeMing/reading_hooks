const router = require('koa-router')()


router.get('/webhooks_reading', async (ctx, next) => {
    // ctx.logger.info(`[request]：${JSON.stringify(ctx.req)}`)
    // console.log(ctx.request.body)
    ctx.status = 200
    ctx.body = {
        status: 0
    }
    await next();
})

module.exports = router