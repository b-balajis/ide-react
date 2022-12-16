import { Route, Routes } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "./index.css";
import PageNotFound from 'pages/PageNotFound';
import Subjects from 'pages/Subjects';
import SignIn from 'pages/SignIn';
import Subject from 'pages/Subject';

function App() {
    return (
        <>
            <Sidebar />
            <div className="md:ml-64">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/settings" element={<Settings/>} />
                    <Route path="/tables" element={<Tables/>} />
                    <Route path="/maps" element={<Maps/>} />
                    <Route path="/subjects" element={<Subjects />} />
                    <Route path="/subject" element={<Subject />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
