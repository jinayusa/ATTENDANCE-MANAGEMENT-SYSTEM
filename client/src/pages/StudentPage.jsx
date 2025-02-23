import React from 'react';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';

const StudentPage = () => {
  return (
    <div>
      <h2>Students</h2>
      <StudentForm />
      <StudentList />
    </div>
  );
};

export default StudentPage;
