const User  = require('./User');
const ranks = require('./ranks');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }
    async search(condition) {
        let result = await condition.buildwareCondition(this.knex.select('*').from('list'));
        return result.map(result => new User(result.id, result.name));
    }
    async insert(userName) {
            await this.knex('list').insert({name: userName});
    }
    async chargeMoney(money, id) {
        await this.knex('list').where('id', id).update('totalMoney', money);
    }
    async updateRank(condition, id) {
        let money = await condition.buildwareCondition(this.knex.select('totalMoney').from('list'), id);
        let rank  = await new ranks().rank(money);

        await this.knex('list').where('id', id).update('rank', rank);
    }
}

module.exports = UserRepository;