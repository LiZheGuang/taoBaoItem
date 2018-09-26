var router = require('koa-router')();
let taobao = require('../controllers/taobao')

router.get('/', function *(next) {
  yield this.render('index', {
    title: 'Hello World Koa!'
  });
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});


router.get('/taoBao',async function(){

  this.body = await taobao.getTaoBao()
})


module.exports = router;
