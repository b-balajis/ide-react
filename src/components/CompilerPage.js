import Button from "@mui/material/Button";
import axios from "axios";
import { useEditor } from "../context/AppContext";
import qs from "qs";
import { useState } from "react";

const CompileButton = (props) => {
  const {  code, setOutput, setError, isSubmitting, setIsSubmitting } =
    useEditor() || {};

  const question = props.question;
  const noofTestCases = question.testcases;
  // Submit code to server

  const [responseData, setResponseData] = useState(null);

  console.log("response data", responseData);

  const handleSubmission = async () => {
    setIsSubmitting(true);
    let noofTestCasesPassed = 0;
    for (let x in noofTestCases) {
      const testcaseInput = noofTestCases[x].input;
      const testcaseOutput = noofTestCases[x].output;
      const data = qs.stringify({
        code: code,
        language: "py",
        input: testcaseInput,
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
        console.log("data", response.data);
        const actualOutput = response.data.output;
        const error = response.data.error;
        if ( error !== "" ){
          console.log("error", error);
          setError(error);
          break;
        }
        if (actualOutput === testcaseOutput && error === ""){
          noofTestCasesPassed++;
        }
        else{
          console.log("actual output", actualOutput);
          console.log("Test Case Failed");
          break;
        }
      } catch (err) {
        console.error(err);
      }
    }
    const output = [noofTestCasesPassed, noofTestCases.length]
    setOutput(output)
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
        onClick={handleSubmission}
      >
        {isSubmitting ? "Compiling..." : "Run"}
      </Button>
    </section>
  );
};

export default CompileButton;
