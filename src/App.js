import { Route, Routes } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import PageNotFound from 'pages/PageNotFound';

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
                    <Route path="*" element={<PageNotFound/>} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}

export default App;
