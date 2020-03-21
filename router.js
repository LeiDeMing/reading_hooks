const router = require('koa-router')()


router.post('/webhooks_reading', async (ctx, next) => {
    console.log(ctx)
})

module.exports = router