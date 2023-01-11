import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";
import Header from "../components/Header"

const Home = () => {
  const { language } = useEditor() || {};
  console.log("language");
  return (
    <div className="h-full bg-black">
      <Header />
      {language === "webd" ? <WebD /> : <ProgrammingEditor />}
    </div>
  );
};

export default Home;
