
import React from 'react';
import SubjectForm from '../components/SubjectForm';
import SubjectList from '../components/SubjectList';

const SubjectPage = () => {
  return (
    <div>
      <h2>Subjects</h2>
      <SubjectForm />
      <SubjectList />
    </div>
  );
};

export default SubjectPage;
