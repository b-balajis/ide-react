import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "./Sidebar";
import StudentDashboard from "./StudentDashboard";
import Subjects from "./Subjects"
import Subject from "./Subject";
// import { Routes, Route } from 'react-router-dom';

const Student = () => {
  const { type } = useParams();
  return (
    <>
    <Sidebar />
    <div className='md:ml-64'>
      {type === 'dashboard' && <StudentDashboard />}
      {type === 'subjects' && <Subjects />}
      {type === "subject" && <Subject />}
    </div>
    </>
  )
}

export default Student
