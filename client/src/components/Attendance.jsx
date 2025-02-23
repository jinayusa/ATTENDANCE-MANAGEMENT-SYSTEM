import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Attendance.module.css';
import AttendanceDisplay from '../components/AttendanceDisplay';

// Remove the following line:
// import mongoose from 'mongoose';

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [date, setDate] = useState('');
  const [attendance, setAttendance] = useState({}); // { studentId: 'present' or 'absent' }

  useEffect(() => {
    const fetchData = async () => {
      const studentRes = await axios.get('http://localhost:5001/students');
      const subjectRes = await axios.get('http://localhost:5001/subjects');
      setStudents(studentRes.data);
      setSubjects(subjectRes.data);
    };
    fetchData();
  }, []);

  const handleStatusChange = (studentId, status) => {
    setAttendance({ ...attendance, [studentId]: status });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      for (const studentId in attendance) {
        // Remove the following line:
        // const mongoose = require('mongoose');
        // Instead, simply pass the studentId string as-is.
        await axios.post('http://localhost:5001/attendance', {
          student: studentId, // send the studentId string directly
          subject: selectedSubject,
          date,
          status: attendance[studentId]
        });
      }
      alert('Attendance recorded');
      setAttendance({});
      setDate('');
      setSelectedSubject('');
    } catch (error) {
      console.error('Error recording attendance', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <h2>Attendance Overview</h2>
        <AttendanceDisplay />
      </div>
      <div>
        <label>Select Subject: </label>
        <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)} required>
          <option value="">Select Subject</option>
          {subjects.map(sub => (
            <option key={sub._id} value={sub._id}>{sub.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Date: </label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
      </div>
      <div className={styles.studentAttendance}>
        <h4>Students</h4>
        {students.map(student => (
          <div key={student._id} className={styles.studentRow}>
            <span>{student.name}</span>
            <select onChange={(e) => handleStatusChange(student._id, e.target.value)} defaultValue="absent">
              <option value="present">Present</option>
              <option value="absent">Absent</option>
            </select>
          </div>
        ))}
      </div>
      <button type="submit">Submit Attendance</button>
    </form>
  );
};

export default Attendance;
