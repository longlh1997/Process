var Router = require('koa-router');
var nunjucks = require('nunjucks');

var router = new Router;

router.get('/l', (context, next) => {
    context.body = nunjucks.render('./index.html', {name:context.result});
})

module.exports = router;