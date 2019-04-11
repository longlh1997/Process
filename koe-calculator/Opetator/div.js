var div = class Div{
    operate(numberA, numberB){
        if(numberB == 0){
            console.log("Division By Zero");
        }
        else{
            return numberA / numberB;
        }
    }
}
module.exports = div;
