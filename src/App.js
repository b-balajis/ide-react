import { Route, Routes } from "react-router-dom";

// Tailwind CSS Style Sheet
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/index.css";
import SignIn from "pages/SignIn";
import Admin from "pages/Admin";
import Student from "pages/Student";
import Faculty from "pages/Faculty";
import Error from "pages/Error";
import Home from "./client/pages/Home";
import { AppProvider } from "client/context/AppContext";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <>
      <AppProvider>
        <ThemeProvider theme={theme}>
            <main>
              <Routes>
                <Route path="/signin" index element={<SignIn />} />
                <Route path="/a/:type" element={<Admin />} />
                <Route path="/f/:type" element={<Faculty />} />
                <Route path="/s/:type" element={<Student />} />
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
        </ThemeProvider>
      </AppProvider>
    </>
  );
}

export default App;
