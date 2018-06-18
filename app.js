const Koa = require('koa')
require('babel-register');
const fs = require('fs')
var render = require('koa-ejs');
const Router = require('koa-router')
const path = require('path')
const page = require('./router/page.js')
const app = new Koa()
const home = new Router()


render(app, {
  root: path.join(__dirname, 'view'),
  layout: '',
  viewExt: 'html',
  cache: false,
  debug: true
});

// 子路由1
home.get('/', async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000')
})