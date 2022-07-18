const Koa = require('koa');

const app = new Koa();

app.use(errorHandler());

app.use(async ctx => {
  if (ctx.path === '/error') throw new Error('ggmp');
  ctx.body = 'OK';
});

function errorHandler() {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = 500;
      ctx.body = 'internal server error';
    }
  };
}

app.listen(process.argv[2]);