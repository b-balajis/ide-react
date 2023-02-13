import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";
import Navbar from "../pages/Student/Navbar";

const Home = () => {
  const { language } = useEditor() || {};
  return (
    <div className="h-full bg-black">
      <Navbar />
      {language === "webd" ? <WebD /> : <ProgrammingEditor />}
    </div>
  );
};

export default Home;
