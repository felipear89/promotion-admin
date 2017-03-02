const Promotion = require('../models/promotion');

exports.create = function(req, res, next) {
  
  var user = new Promotion(req.body);
  user.save()
    .then(function(doc) {
      console.log(doc);
      res.send({ success: true });
    });
}
