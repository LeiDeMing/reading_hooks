const Koa = require('koa')
const router = require('./router')
const app = new Koa()

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(1521, () => {
    console.log('server start at 1521');
})
