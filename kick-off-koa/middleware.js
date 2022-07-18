const Koa = require('koa');

const app = new Koa();

app.use(responseTime());
app.use(upperCase());

app.use(async ctx => {
  ctx.body = 'hello koa';
});

function responseTime() {
  return async (ctx, next) => {
    const start = new Date;
    await next();
    ctx.set('X-Response-Time', new Date - start);
  };
}

function upperCase() {
  return async (ctx, next) => {
    await next();
    ctx.body = ctx.body.toUpperCase();
  };
}

app.listen(process.argv[2]);