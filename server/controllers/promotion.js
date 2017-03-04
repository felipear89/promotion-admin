const Promotion = require('../models/promotion');

exports.create = function(req, res, next) {
  
  var promotion = new Promotion(req.body);
  promotion.save()
    .then(function(doc) {
      console.log(doc);
      res.send({ success: true });
    });
};

exports.list = function(req, res, next) {
  Promotion.find()
    .then((docs) => {
      res.send(docs);
    })
    .catch((error) => {
      res.send(error);
    });
};
