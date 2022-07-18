const views = require('co-views');
const Koa = require('koa');
const app = module.exports = new Koa();

const render = views(__dirname + '/views', {
  ext: 'ejs'
});

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(async ctx => {
  ctx.body = await render('user', {
    user: user
  });
});

app.listen(process.argv[2]);