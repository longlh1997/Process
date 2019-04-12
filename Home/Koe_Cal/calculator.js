const calculator = async(context, next) => {
    var result = context.cal.operates(context.numberA, context.numberB, context.op);
    context.body = {
        Result: result,
        message: context.query.op
    }
}

module.exports = calculator;
