const numberFilterMiddleware = async(context, next) => {
    const numberA = Number(context.query.numberA);
    const numberB = Number(context.query.numberB);
    const op      = context.query.op;

    if(numberA, numberB, op){
        if(!isNaN(numberA)&&!isNaN(numberB)){
            if((Object.keys(context.cal.operator)).includes(op)){
                context.numberA = numberA;
                context.numberB = numberB;
                context.op = op;
                return await next();
            }
        }
    }
    context.body = {
        message: "Error"
    }
};

module.exports = numberFilterMiddleware;
