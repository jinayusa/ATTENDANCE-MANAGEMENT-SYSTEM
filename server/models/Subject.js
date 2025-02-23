const mongoose = require('mongoose');
const SubjectSchema = new mongoose.Schema({
  name: String,
  code: String
});
module.exports = mongoose.model('Subject', SubjectSchema);
