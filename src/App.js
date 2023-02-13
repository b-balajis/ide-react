import { Route, Routes, Navigate } from "react-router-dom";

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/index.css";
import './App.css';
import SignIn from "pages/SignIn";
import AdminHome from "pages/Admin";
import StudentHome from "pages/Student";
import FacultyHome from "pages/Faculty";
import { AppProvider } from "context/AppContext";
import Subject from "./pages/Faculty/Subject";
import StudentSubject from "./pages/Student/Subject";
import Profile from "./pages/Student/Profile";
import StudentDashboard from "./pages/Student/StudentDashboard";
import FacultyDashboard from "./pages/Faculty/FacultyDashboard";
import Home from "page/Home"

function App() {
  return (
    <>
      <AppProvider>
        {/* <ThemeProvider theme={theme}> */}
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/signin" />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Routes>
              <Route path="/a" element={<AdminHome />} />
              <Route path="/a/:type" element={<AdminHome />} />
            </Routes>
            <Routes>
              <Route path="/f" element={<FacultyHome />} />
              <Route path="/f/:subjectName" element={<Subject />} />
              <Route path="/f/dashboard" element={<FacultyDashboard />} />
            </Routes>
            <Routes>
              <Route path="/s" element={<StudentHome />} />
              <Route path="/s/profile" element={<Profile />} />
              <Route path="/s/:subjectName" element={<StudentSubject />} />
              <Route path="/s/dashboard" element={<StudentDashboard />} />
              <Route path="/s/:subjectName/:question" element={<Home />} />
            </Routes>
          </main>
        {/* </ThemeProvider> */}
      </AppProvider>
    </>
  );
}

export default App;
