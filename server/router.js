const Promotion = require('./controllers/promotion');

module.exports = function(app) {
  app.post('/promotions/new', Promotion.create);
}
