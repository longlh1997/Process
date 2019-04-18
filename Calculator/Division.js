var sphinxDivision     = require('@sphinx-software/division-operator/index');

function createShinxDivsion(){
    var sphinxDiv      = new sphinxDivision(false);
    sphinxDiv.setMessageWhenFailed("Division By Zero");
    return sphinxDiv;
}
class Division {
    constructor(){
        this.sphinxDiv = createShinxDivsion();
    }
    execute(numberA, numberB){
        return this.sphinxDiv.runDivide(numberA,numberB);
    }
}
module.exports = Division;

