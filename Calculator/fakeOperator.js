const simon             = require('sinon');
class fakeOperator {
    constructor() {
        this.execute = simon.fake.returns(160);
    }
}
module.exports = fakeOperator;