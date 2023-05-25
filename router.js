const Router = require('koa-router')
const router = new Router()

//设置统一请求格式中间件
router.use(async (ctx,next) => {
    try{
        await next() //先执行下一个中间件 或者路由处理程序
        if(!ctx.response.status){
            ctx.response.status = 200
        }
        ctx.body = {
            success:true,
            data:ctx.body,
        }
    }catch(err){
        ctx.response.status = err.statusCode || err.status || 500
        ctx.body = {
            success:false,
            error:{
                message:err.message || 'Internal Server Error'
            }
        }

    }
})

//设置跨域
router.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*'); // Set the appropriate origin
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type');
    await next();
  });

router.get('/aaa',(ctx) => {
    ctx.body = 'hello, Home!'
})

module.exports = router
// export default router