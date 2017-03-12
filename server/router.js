const Promotion = require('./controllers/promotion');
const Catalog = require('./controllers/catalog');

module.exports = function(app) {
  app.post('/promotions/new', Promotion.create);
  app.get('/promotions', Promotion.list);
  app.get('/catalog', Catalog.search)
}
