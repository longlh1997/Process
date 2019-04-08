class Add{
    operate(numberA, numberB){
        return Number(numberA) + Number(numberB);
    }
}
class Sub{
    operate(numberA, numberB){
        return Number(numberA) - Number(numberB);
    }
}
class Multi{
    operate(numberA, numberB){
        return Number(numberA) * Number(numberB);
    }
}
class Div{
    operate(numberA, numberB){
        if(Number(numberB)== 0){
            console.log("Division By Zero");
        }
        else{
            return Number(numberA) / Number(numberB);
        }
    }
}
var somethingToExports = {
    Add: Add,
    Sub: Sub,
    Multi: Multi,
    Div: Div
}
module.exports = somethingToExports;