import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Subjects from "../../data/Subjects.json";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { NavLink } from "react-router-dom";
import AddQuestion from "./AddQuestion";

const Subject = () => {
  // const [subject, setSubject] = React.useState(Subjects);
  // const subject = Subjects.filter(function (sub){
  //   return sub.id === "Python"
  // })
  let subName = "Python";
  const subjectQuestions = Subjects[subName];

  const handleSolve = (id) => {
    console.log("Solve", id);
  };

  const handleAddQuestion = () => {
    console.log("Add Question");
    <AddQuestion />;
  };

  return (
    <div className="ml-12 mt-12">
      <Button
          variant="contained"
          href="#contained-buttons"
          size="large"
          className="mt-10"
          onClick={handleAddQuestion}
        >
          <span>
            <AddSharpIcon />
          </span>
          Add Question
        </Button>
      {subjectQuestions.map((questions) => {
        return (
          <div className="my-2">
            <Card sx={{ maxWidth: 1500 }}>
              <div className="flex justify-between my-2">
                <div>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {questions.id}. {questions.question}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </div>
                <div>
                  <CardActions>
                    <Button
                      variant="contained"
                      size="large"
                      key={questions.id}
                      onClick={() => handleSolve(questions.id)}
                    >
                      Solve
                    </Button>
                  </CardActions>
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Subject;
