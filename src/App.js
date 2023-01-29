import { Route, Routes, Navigate } from "react-router-dom";

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/index.css";
import SignIn from "pages/SignIn";
import AdminHome from "pages/Admin";
import StudentHome from "pages/Student";
import FacultyHome from "pages/Faculty";
import { AppProvider } from "context/AppContext";
import Subject from "./pages/Faculty/Subject";
import StudentSubject from "./pages/Student/Subject";
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
              <Route path="/a/:type" element={<AdminHome />} />
            </Routes>
            <Routes>
              <Route path="/f" element={<FacultyHome />} />
              <Route path="/f/:type" element={<Subject />} />
            </Routes>
            <Routes>
              <Route path="/s" element={<StudentHome />} />
              <Route path="/s/:subjectname" element={<StudentSubject />} />
              <Route path="/s/:subjectname/:question" element={<Home />} />
            </Routes>
          </main>
        {/* </ThemeProvider> */}
      </AppProvider>
    </>
  );
}

export default App;
