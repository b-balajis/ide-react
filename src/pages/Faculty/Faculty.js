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
    hello
    </>
  )
}

export default Faculty;
