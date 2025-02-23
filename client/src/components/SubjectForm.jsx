import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/SubjectForm.module.css';

const SubjectForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/subjects', { name, code });
      setName('');
      setCode('');
      window.location.reload();
    } catch (error) {
      console.error('Error adding subject', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input 
        type="text" 
        placeholder="Subject Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <input 
        type="text" 
        placeholder="Subject Code" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
        required
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;
