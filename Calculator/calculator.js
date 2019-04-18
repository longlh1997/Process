var fakeOperator = require('./fakeOperator');
class calculator {
    constructor() {
        this.operators       = {};
    }
    register(name, operator) {
        this.operators[name] = operator;
    }
    claculate(operatorName, numberA, numberB) {
        const operator       = this.operators[operatorName];
        if(!operator) {
            throw new Error('Operator ' + operatorName + ' dose not support');
        }
        return operator.execute(numberA, numberB);
    }
}
module.exports = calculator;