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
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddStudent from "./pages/Admin/AddStudent";
import AddFaculty from "./pages/Admin/AddFaculty";
import AddSubject from "./pages/Admin/AddSubject";
import Home from "page/Home"
import AddQuestion from "pages/Faculty/AddQuestion";
import Management from "pages/Admin/Management";

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
              <Route path="/a/dashboard" element={<AdminDashboard />} />
              <Route path="/a/addstudent" element={<AddStudent />} />
              <Route path="/a/addfaculty" element={<AddFaculty />} />
              <Route path="/a/addsubject" element={<AddSubject />} />
              <Route path="/a/manage" element={<Management />} />
            </Routes>
            <Routes>
              <Route path="/f" element={<FacultyHome />} />
              <Route path="/f/:subjectName" element={<Subject />} />
              <Route path="/f/dashboard" element={<FacultyDashboard />} />
              <Route path="/f/addquestion" element={<AddQuestion />} />
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
