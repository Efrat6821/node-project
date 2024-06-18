const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const meetingSchema = new Schema({
  title: String,
  date: Date,
  participants: [String],
});

const MeetingModel = mongoose.models.Meeting || model('Meeting', meetingSchema);

module.exports = MeetingModel;
