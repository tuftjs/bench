const http2 = require('http2');
const koa = require('koa');
const router = require('koa-router')();

const app = new koa();

router.get('/', async ctx => {
  ctx.body = 'Hello, world!';
});

app.use(router.routes());

http2
  .createServer(app.callback())
  .listen(3000, () => {
    console.log('Server is running.');
  });
