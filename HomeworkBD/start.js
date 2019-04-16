var Koa = require('koa');

var app = new Koa();

const knex = require('./connectmysql.js');
const getData = require('./getData.js');
const router = require('./router.js')

app.use(knex);
app.use(getData);
app.use(router.routes());

app.listen(2002);
