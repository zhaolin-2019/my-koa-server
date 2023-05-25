const Koa = require('koa')
const router = require('./router')
const app = new Koa()

//关联koa-router
app.use(router.routes())

//启动服务器
app.listen(3001,() => {
    console.log('server is running on port 3001')
})