import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/AttendanceDisplay.module.css';

const AttendanceDisplay = () => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [date, setDate] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  // Fetch the list of subjects when the component mounts.
  useEffect(() => {
    axios.get('http://localhost:5001/subjects')
      .then(res => setSubjects(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('http://localhost:5001/attendance');
      const allRecords = res.data;
      console.log('All Attendance Records:', allRecords); // Check what you get here
  
      const filteredRecords = allRecords.filter(record => {
        const recordDate = new Date(record.date).toLocaleDateString();
        const selectedDate = new Date(date).toLocaleDateString();
        const recordSubjectId = record.subject._id 
          ? record.subject._id.toString() 
          : record.subject.toString();
        return recordSubjectId === selectedSubject && recordDate === selectedDate;
      });
      console.log('Filtered Records:', filteredRecords);
      setAttendanceRecords(filteredRecords);
    } catch (err) {
      console.error(err);
    }
  };
  
  

  return (
    <div className={styles.container}>
      <h2>View Attendance</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Subject:</label>
          <select 
            value={selectedSubject} 
            onChange={(e) => setSelectedSubject(e.target.value)} 
            required
          >
            <option value="">Select Subject</option>
            {subjects.map(sub => (
              <option key={sub._id} value={sub._id}>
                {sub.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className={styles.submitButton}>Show Attendance</button>
      </form>

      <div className={styles.attendanceList}>
        {attendanceRecords.length > 0 ? (
          attendanceRecords.map(record => (
            <div key={record._id} className={styles.record}>
             <span className={styles.studentName}>
  {record.student && record.student.name ? record.student.name : 'Unknown Student'}
</span>

              <span 
                className={`${styles.statusIndicator} ${record.status === 'present' ? styles.present : styles.absent}`}
              />
            </div>
          ))
        ) : (
          <p className={styles.noRecords}>
            No attendance records found for the selected subject and date.
          </p>
        )}
      </div>
    </div>
  );
};

export default AttendanceDisplay;
