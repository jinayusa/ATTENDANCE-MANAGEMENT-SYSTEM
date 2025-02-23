import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/SubjectList.module.css';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const res = await axios.get('http://localhost:5001/subjects');
      setSubjects(res.data);
    };
    fetchSubjects();
  }, []);

  return (
    <div className={styles.list}>
      <h3>Subject List</h3>
      <ul>
        {subjects.map(subject => (
          <li key={subject._id}>{subject.name} ({subject.code})</li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
