const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const serviceSchema = new Schema({
    name: String,
    cost: Number,
    id: Number
});

const ServiceModel = mongoose.models.Service || model('Service', serviceSchema);

module.exports = ServiceModel;
