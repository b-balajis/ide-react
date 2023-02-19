import React from 'react'
// import { useParams } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import AddStudent from './AddStudent';
// import AddFaculty from './AddFaculty';
// import AddSubject from "./AddSubject";
// import FacultyDashboard from './FacultyDashboard';
// import AddQuestion from './AddQuestion';
import Navbar from './Navbar';

const Admin = () => {
  // const { type } = useParams();
  return (
    <>
    <Navbar />
    {/* <Sidebar />
    <div className='md:ml-64'>
      {type === 'dashboard' && <FacultyDashboard />}
      {type === 'addstudent' && <AddStudent />}
      {type === 'addfaculty' && <AddFaculty />}
      {type === 'addsubject' && <AddSubject />}
      {type === 'addquestion' && <AddQuestion />}
    </div> */}
    </>
  )
}

export default Admin
