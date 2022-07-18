const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.body = 'Hello World';
})


app.use(async (ctx, next) => {
    ctx.console.log('Middleware');
    next();
})



app.listen(3012, () => {
    console.log('http://localhost:3012');
})