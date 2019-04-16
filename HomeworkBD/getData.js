async function getData(context, next){
    const result = await context.knex.select('name').from('list').where('name','like','%'+context.query.name+'%');
    context.result = result;
    await next();
  };
module.exports = getData;