const Koa = require('koa');
const parse = require('co-body');

const app = new Koa();

app.use(async (ctx, next) => {
    if(ctx.method !== 'POST'){
        return await next();
    }
    const body = await parse(ctx, {limit: '1kb'});

    if(!body.name){
        ctx.throw(400, '.name required');
    }

    ctx.body = body.name.toUpperCase();


})


app.listen(process.argv[2]);