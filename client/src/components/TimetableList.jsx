import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/TimetableList.module.css';

const TimetableList = () => {
  const [timetables, setTimetables] = useState([]);

  useEffect(() => {
    const fetchTimetables = async () => {
      const res = await axios.get('http://localhost:5001/timetables');
      setTimetables(res.data);
    };
    fetchTimetables();
  }, []);

  return (
    <div className={styles.list}>
      <h3>Timetable List</h3>
      <ul>
        {timetables.map(tt => (
          <li key={tt._id}>
            {tt.day} - {tt.time} - Subject ID: {tt.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimetableList;
