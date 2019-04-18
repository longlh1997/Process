const Calculator        = require('./calculator');
const assert            = require('chai').assert;
const simon             = require('sinon');
const mocha             = require('mocha');
const Addition          = require('./Addition');
const Subtraction       = require('./Subtraction');
const Multiplication    = require('./Multiplication');
const Division          = require('./Division');
const FakeOperator      = require('./fakeOperator');

describe('Test Calculator', () => {
    const addition       = new Addition();
    const subtraction    = new Subtraction();
    const multiplication = new Multiplication();
    const division       = new Division();
    const calculator     = new Calculator();
    const fake           = new FakeOperator();

    calculator.register('fake', fake);

    it('should return result from operator', () => {
        const result = calculator.claculate('fake', 1, 2);
        assert.equal(result, 160);
        assert(fake.execute.calledOnce, 'expect operator should be run once');
        assert(fake.execute.calledWith(1,2), 'expect operator should be called with 1, 2');
    });
    it('should throw error if using unsupported operator', () => {
        assert.throw(() => {
            calculator.claculate('voz', 2, 2);
        }, 'Operator voz dose not support');
    });
    it('should return result from add()', () => {
        const result = addition.execute(1, 2);
        assert.equal(result, 3);
    });
    it('should return result from sub()', () => {
        const result = subtraction.execute(2, 1);
        assert.equal(result, 1);
    });
    it('should return result form multi', () => {
        const result = multiplication.execute(1, 2);
        assert.equal(result, 2);
    });
    it('should return result from div with nunberB != 0', () => {
        const result = division.execute(4, 2);
        assert.equal(result, 2);
    });
    it('should return result from div with numberB = 0', () => {
        assert.throw(() => {
            division.execute(2,0);
        },`Division By Zero`)
    });
})