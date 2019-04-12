var Koa = require('koa');
var Router = require('koa-router');
var nunjucks = require('nunjucks');

var app = new Koa();
var router = new Router();

router.get('/', (ctx,next) => {
    ctx.body = nunjucks.render('index.html', {name: "Hai Long"});
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000);