var run = require('./Opetator/operator.js');
var cal = new run();

module.exports = async (context, next) => {
    context.cal = cal;
    await next();
}
