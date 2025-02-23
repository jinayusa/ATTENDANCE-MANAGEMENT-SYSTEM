import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/StudentList.module.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get('http://localhost:5001/students');
      setStudents(res.data);
    };
    fetchStudents();
  }, []);

  return (
    <div className={styles.list}>
      <h3>Student List</h3>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.name} ({student.rollNumber})</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
