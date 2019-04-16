const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'longlh',
        password: 'longlh1997',
        database: 'testdb'
    }
})

async function connect(context, next){
    context.knex = knex;
    await next();
}
module.exports = connect;