const Koa = require('koa');
const app = new Koa();

const numberFilter = async(context, next) => {
    const numberA = context.query.numberA;
    const numberB = context.query.numberB;
    const op = context.query.op;

    if(numberA, numberB ){
        return await next();
    }
    context.body = {
        message: "Error"
    }
};

const calculator = async(context, next) => {
    const numA = parseInt(context.query.numberA);
    const numB = parseInt(context.query.numberB);
    const op = context.query.op;

    var run = require('./calculator0804.js');
    var ope = {
        "add":(new run.add),
        "sub":(new run.sub),
        "multi":(new run.multi),
        "div":(new run.div)
    };
    

    context.body = {
        Result: ope[op].operate(numA,numB),
        message: context.query.op
    }
}

app.use(numberFilter);
app.use(calculator);

app.listen(3000);