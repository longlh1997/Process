const Router                = require('koa-router');
const searchByNameCondition = require('./User/searchByNameConditon');
const totalMoney            = require('./User/totalMoney');

const router                = new Router();

router.get('/search/:name', async (context) => {
    let users               = await context.userRepository.search(new searchByNameCondition(context.params.name));

    context.logger.log({query: context.params.name, result: users});
    context.render('index.html', { users });
});
router.get('/insert/:name', async (context) => {
        let users = await context.userRepository.setUser(context.params.name);
        context.render('index.html', { users });
});
router.get('/chargeMoney/:money/:id', async (context) => {
        let chargeMoney = await context.userRepository.chargeMoney(context.params.money, context.params.id);
        context.render('index.html', {chargeMoney});
});
router.get('/updateRank/:id', async (context) => {
        let rank = await context.userRepository.updateRank(new totalMoney(), context.params.id);
        context.render('index.html', { rank });
})

module.exports   = router;
