import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "./Sidebar";
import FacultyDashboard from './FacultyDashboard';
import Subjects from './Subjects';
import Subject from './Subject';
import AddQuestion from './AddQuestion';

const Faculty = () => {
    const { type } = useParams();
  return (
    <>
    <Sidebar />
    <div className='md:ml-64'>
      {type === 'dashboard' && <FacultyDashboard />}
      {type === "subjects" && <Subjects />}
      {type === "subject" && <Subject />}
      {type === "addquestion" && <AddQuestion />}
    </div>
    </>
  )
}

export default Faculty;
