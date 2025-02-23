const mongoose = require('mongoose');
const TimetableSchema = new mongoose.Schema({
  day: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  time: String
});
module.exports = mongoose.model('Timetable', TimetableSchema);
