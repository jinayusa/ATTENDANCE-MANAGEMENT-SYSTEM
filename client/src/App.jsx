import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentPage from './pages/StudentPage';
import SubjectPage from './pages/SubjectPage';
import TimetablePage from './pages/TimetablePage';
import AttendancePage from './pages/AttendancePage';
import styles from './styles/App.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Attendance Management System</h1>
          <nav>
            <ul className={styles.navList}>
              <li><Link to="/">Students</Link></li>
              <li><Link to="/subjects">Subjects</Link></li>
              <li><Link to="/timetables">Timetables</Link></li>
              <li><Link to="/attendance">Attendance</Link></li>
            </ul>
          </nav>
        </header>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<StudentPage />} />
            <Route path="/subjects" element={<SubjectPage />} />
            <Route path="/timetables" element={<TimetablePage />} />
            <Route path="/attendance" element={<AttendancePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
