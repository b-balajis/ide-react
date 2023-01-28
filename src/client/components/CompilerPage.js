import Button from "@mui/material/Button";
import axios from "axios";
import { useEditor } from "../context/AppContext";
import qs from "qs";
import { useState } from "react";

const CompileButton = (props) => {
  const { language, code, stdIn, setOutput, isSubmitting, setIsSubmitting } =
    useEditor() || {};

  const question = props.question;
  const noofTestCases = question.testcases;
  console.log(noofTestCases);

  // Submit code to server

  const [responseData, setResponseData] = useState(null);

  const handleSubmission2 = async () => {
    for (let i = 0; i < 10; i++) {
      const data = qs.stringify({
        code: code,
        language: "py",
        input: stdIn,
      });
      const config = {
        method: "post",
        url: "https://api.codex.jaagrav.in",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      try {
        const response = await axios(config);
        setResponseData(response.data);
        console.log("output", response.data);
      } catch (err) {
        console.error(err);
      }
      console.log("count", i);
    }
  };
  const handleSubmission = async () => {
    setIsSubmitting(true);
    let nooftestCasesPassed = 0;
    const totaltestCases = noofTestCases.length;
    console.log("total", totaltestCases);
    for (let x in noofTestCases) {
      const testcaseInput = noofTestCases[x].input;
      const testcaseOutput = noofTestCases[x].output;
      // console.log("input & output", testcaseInput, testcaseOutput);
      const body = JSON.stringify({
        script: code,
        stdin: testcaseInput,
        language,
      });
      const config = { headers: { "Content-type": "application/json" } };

      const res = await axios.post(
        "http://localhost:5000/api/submission",
        body,
        config
      );

      const data = res.data;
      const actualOutput = data.output;
      console.log("data", data);
      if (testcaseOutput === actualOutput) {
        nooftestCasesPassed++;
      } else {
        console.log("Test Case Failed");
        setOutput(data);
        break;
      }
    }
    const outputdata = [nooftestCasesPassed, totaltestCases];
    setOutput(outputdata);

    setIsSubmitting(false);
  };

  return (
    <section className="flex justify-between">
      <div className="flex gap-4">
        {noofTestCases.map((sub, i) => (
          <>
            {isSubmitting ? (
              <Button variant="outlined" color="secondary">
                Test Case {i + 1}
              </Button>
            ) : (
              <Button variant="outlined" color="success">
                Test Case {i + 1}
              </Button>
            )}
          </>
        ))}
      </div>
      <Button
        className="w-48"
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmission2}
      >
        {isSubmitting ? "Compiling..." : "Run"}
      </Button>
    </section>
  );
};

export default CompileButton;
