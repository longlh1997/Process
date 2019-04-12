var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.post('/User', (ctx,next) => {
    
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000);