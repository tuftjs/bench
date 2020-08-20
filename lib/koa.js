'use strict';

const Koa = require('koa');
const router = require('@koa/router')();

const app = new Koa();

router.get('/', ctx => {
  ctx.body = 'Hello, world!\n';
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('Server is running.');
})
