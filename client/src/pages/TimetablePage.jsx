import React from 'react';
import TimetableForm from '../components/TimetableForm';
import TimetableList from '../components/TimetableList';

const TimetablePage = () => {
  return (
    <div>
      <h2>Timetables</h2>
      <TimetableForm />
      <TimetableList />
    </div>
  );
};

export default TimetablePage;
