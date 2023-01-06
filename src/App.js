import { Route, Routes } from "react-router-dom";

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/index.css";
import SignIn from "pages/SignIn";
import Admin from "pages/Admin";
import Student from "pages/Student";
import Faculty from "pages/Faculty";
import Error from "pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signin" index element={<SignIn />} />
        <Route path="/a/:type" element={<Admin />} />
        <Route path="/f/:type" element={<Faculty />} />
        <Route path="/s/:type" element={<Student />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
