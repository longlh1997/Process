var run = require('./calculator0804.js');
class calculator{
    constructor(){
        this.operators = {};
    }
    claculate(operator,numberA,numberB){
        return this.operators[operator].operate(numberA,numberB);
    }
    registerOpertator(operatorName, operator) {
        this.operators[operatorName] = operator;
    }
}
var cal = new calculator();

cal.registerOpertator('+', new run.Add());
cal.registerOpertator('-', new run.Sub());
cal.registerOpertator('x', new run.Multi());
cal.registerOpertator('/', new run.Div());
const result = cal.claculate(process.argv[2],process.argv[3],process.argv[4])
console.log(result);
