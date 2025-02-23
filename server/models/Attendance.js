// server/models/Attendance.js
const mongoose = require('mongoose');
import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  date: Date,
  status: { type: String, enum: ['present', 'absent'], default: 'absent' }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
