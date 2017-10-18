const KoaRouter = require('koa-router');

const router = new KoaRouter();

router.get('hello', '/', async (ctx) => {
  await ctx.render('hello/index', {
    nameUrl: name => ctx.router.url('hello.name', name),
    notice: ctx.flashMessage.notice,
  });
});

router.post('hello', '/', async (ctx) => {
  ctx.flashMessage.notice = 'Form successfully processed';
  // this is just to show how to send an e-mail using a mailer helper fn
  // but it will never be executed
  ctx.redirect(router.url('hello'));
});

router.get('hello.name', '/:name', (ctx) => {
  ctx.body = { message: `Hello ${ctx.params.name}!` };
});

module.exports = router;
