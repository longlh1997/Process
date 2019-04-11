const add   = require('./add');
const sub   = require('./sub');
const multi = require('./multi');
const div   = require('./div');

class operators{
    constructor(){
        this.operator = {
            "add": new add(),
            "sub": new sub(),
            "multi": new multi(),
            "div": new div()
        };
    }
    operates(numberA, numberB, op){
        return this.operator[op].operate(numberA, numberB);
    }
}

module.exports = operators;
