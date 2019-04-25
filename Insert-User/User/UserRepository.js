const User = require('./User');

class UserRepository {
    constructor(knex) {
        this.knex = knex;
    }
    async getAllUser() {
        let results = await this.knex.select('*').from('list');
        return results.map(result => new User(result.id, result.name));
    }
    async getUser(userName) {
        let results = await this.knex.select('*').from('list').where('name', 'like', '%' + userName + '%');
        return results.map(result => new User(result.id, result.name));
    }
    async checkDuplicateUser(userName) {
        let results = this.knex('list').where('name', '=', userName);
        return results;
    }
    async setUser(userName) {
            let check = await this.checkDuplicateUser(userName);
            if(check[0]){
                return false;
            }
            else{
                await this.knex('list').insert({name: userName});
                return await this.getAllUser();
            }
            
    }
}

module.exports = UserRepository;
