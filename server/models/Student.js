const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String
});
module.exports = mongoose.model('Student', StudentSchema);
