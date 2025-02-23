import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/TimetableForm.module.css';

const TimetableForm = () => {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const res = await axios.get('http://localhost:5001/subjects');
      setSubjects(res.data);
    };
    fetchSubjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/timetables', { day, time, subject: subjectId });
      setDay('');
      setTime('');
      setSubjectId('');
      window.location.reload();
    } catch (error) {
      console.error('Error adding timetable', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        placeholder="Day (e.g. Monday)" 
        value={day} 
        onChange={(e) => setDay(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Time (e.g. 9:00 AM)" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required
      />
      <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} required>
        <option value="">Select Subject</option>
        {subjects.map(subject => (
          <option key={subject._id} value={subject._id}>{subject.name}</option>
        ))}
      </select>
      <button type="submit">Add Timetable</button>
    </form>
  );
};

export default TimetableForm;
