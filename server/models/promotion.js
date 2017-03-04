const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const promotionSchema = new Schema({
  name: { type: String, unique: true },
  start_date: Date,
  end_date: Date,
  utm_source: String,
  utm_medium: String,
  utm_campaign: String
});

const ModelClass = mongoose.model('promotion', promotionSchema);

module.exports = ModelClass;
