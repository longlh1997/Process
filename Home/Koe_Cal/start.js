const Koa = require('koa');
const numberFilterMiddleware = require('./numberFilterMiddleware.js')
const calculator = require('./calculator.js')
const operatorMiddleware = require('./operatorMiddleware');

const app = new Koa();

app.use(operatorMiddleware);
app.use(numberFilterMiddleware);
app.use(calculator);

app.listen(3001);
