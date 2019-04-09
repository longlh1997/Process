var add = class Add{
    operate(numberA, numberB){
        return Number(numberA) + Number(numberB);
    }
}
var sub = class Sub{
    operate(numberA, numberB){
        return Number(numberA) - Number(numberB);
    }
}
var multi = class Multi{
    operate(numberA, numberB){
        return Number(numberA) * Number(numberB);
    }
}
var div = class Div{
    operate(numberA, numberB){
        if(Number(numberB)== 0){
            console.log("Division By Zero");
        }
        else{
            return Number(numberA) / Number(numberB);
        }
    }
}

exports.sub = sub;
exports.add = add;
exports.multi = multi;
exports.div = div;

