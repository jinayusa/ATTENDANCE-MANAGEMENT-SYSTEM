import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/StudentForm.module.css';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/students', { name, rollNumber });
      setName('');
      setRollNumber('');
      window.location.reload();
    } catch (error) {
      console.error('Error adding student', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        placeholder="Student Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Roll Number" 
        value={rollNumber} 
        onChange={(e) => setRollNumber(e.target.value)} 
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
