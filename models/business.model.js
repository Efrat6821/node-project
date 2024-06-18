const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const businessSchema = new Schema({
  name: String,
  services: String,
  address: String,
});

const BusinessModel = mongoose.models.Business || model('Business', businessSchema);

module.exports = BusinessModel;
