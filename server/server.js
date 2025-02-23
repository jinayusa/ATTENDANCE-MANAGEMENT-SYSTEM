const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const Student = require('./models/Student');
const Subject = require('./models/Subject');
const Timetable = require('./models/Timetable');
const Attendance = require('./models/Attendance');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/attendanceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Student routes
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.post('/students', async (req, res) => {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.json(newStudent);
});

// Subject routes
app.get('/subjects', async (req, res) => {
  const subjects = await Subject.find();
  res.json(subjects);
});
app.post('/subjects', async (req, res) => {
  const newSubject = new Subject(req.body);
  await newSubject.save();
  res.json(newSubject);
});

// Timetable routes
app.get('/timetables', async (req, res) => {
  const timetables = await Timetable.find();
  res.json(timetables);
});
app.post('/timetables', async (req, res) => {
  const newTimetable = new Timetable(req.body);
  await newTimetable.save();
  res.json(newTimetable);
});

// Attendance routes
app.get('/attendance', async (req, res) => {
    try {
      const records = await Attendance.find()
        .populate('student')   // This replaces the student ID with the full student document.
        .populate('subject');  // Similarly for subject, if needed.
      res.json(records);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
app.post('/attendance', async (req, res) => {
  const newAttendance = new Attendance(req.body);
  await newAttendance.save();
  res.json(newAttendance);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
