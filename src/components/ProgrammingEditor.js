import { useEditor } from "../context/AppContext";
import CompilerPage from "./CompilerPage";
import Editor from "./Editor";
import { useLocation } from "react-router-dom";

const ProgrammingEditor = () => {
  const { code, setCode, output, error } = useEditor() || {};

  const location = useLocation();
  const question = location.state.question;
  const subjectName = location.state.subjectName.toLowerCase();

  return (
    <div className="flex flex-col w-4/5 gap-10 p-4 mx-auto mt-3">
      <h1 className="font-bold text-white">
        {question.qno}. {question.question}
      </h1>
      <section className="flex-grow h-[80vh]">
        <Editor language={subjectName} code={code} setCode={setCode} />
      </section>

      <CompilerPage question={question} />

      <section className="flex flex-col items-start justify-start gap-4 text-white">
        <div>
          <h1>Sample Input : </h1>
          <h1>{question.sampleinput}</h1>
        </div>
        <div>
          <h1>Sample Output : </h1>
          <h1>{question.sampleoutput}</h1>
        </div>

        {/* Output area */}
        {output && (
          <div className="w-full">
            <div className="p-2 border border-b-0 border-borderPrimary text-white">
              Output
              <div className="flex items-center gap-5 mt-2 text-sm ">
                <span>
                  <span className="text-white">Time</span> {output.cpuTime} sec
                </span>
                <span>
                  <span className="text-white">Mem</span> {output.memory} kB
                </span>
              </div>
            </div>
            <textarea
              name="output"
              id="output"
              className="w-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none text-white text-3xl"
              cols="30"
              rows="5"
              value={output[0] + "/" + output[1] + " Test Cases Passed"}
              readOnly
              spellCheck={false}
            />
          </div>
        )}
        {error && (
          <div className="w-full">
            <div className="p-2 border border-b-0 border-borderPrimary text-white">
              Error
            </div>
            <textarea
              name="error"
              id="error"
              className="w-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none text-white text-3xl"
              cols="30"
              rows="5"
              value={error}
              readOnly
              spellCheck={false}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProgrammingEditor;
