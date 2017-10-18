const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
  const candidates = await ctx.orm.Candidates.findAll();
  await ctx.render('index', { appVersion: pkg.version , candidates});
});

module.exports = router;
