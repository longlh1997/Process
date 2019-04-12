var sphinxDivision = require('@sphinx-software/division-operator/index');
function createShinxDivsion(){
    var sphinxDiv = new sphinxDivision(false);
    sphinxDiv.setMessageWhenFailed("Division By Zero");
    return sphinxDiv;
}
var div = class Div{
    constructor(){
        this.sphinxDiv = createShinxDivsion();
    }
    operate(numberA, numberB){
        return this.sphinxDiv.runDivide(numberA,numberB);
    }
}
module.exports = div;
