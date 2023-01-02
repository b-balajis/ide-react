import { Route, Routes } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/index.css";
// import PageNotFound from 'pages/PageNotFound';
import Subjects from 'pages/Subjects';
import SignIn from 'pages/SignIn';
import Subject from 'pages/Subject';
import AddStudent from 'pages/AddStudent';
import AddFaculty from 'pages/AddFaculty';
import AddSubject from 'pages/AddSubject';
import Error from 'pages/Error';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/maps" element={<Maps/>} />
                    <Route path="/subjects" element={<Subjects />} />
                    <Route path="/subject" element={<Subject />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/addstudent" element={<AddStudent />} />
                    <Route path="/addfaculty" element={<AddFaculty />} />
                    <Route path="/addsubject" element={<AddSubject />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
