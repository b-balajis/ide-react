import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Subjects from "../../data/Subjects.json";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Subject = () => {
  const location = useLocation();

  console.log("about", location.state.subjectName);

  let subName = location.state.subjectName;
  const subjectQuestions = Subjects[subName];

  const handleSolve = (id) => {
    console.log("Solve", id);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        {subjectQuestions.map((questions) => {
          return (
            <div className="my-2 w-9/12">
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
                      <NavLink
                        to={`${questions.id}`}
                        key={questions.id}
                        state={{
                          question: questions,
                          subjectName: subName,
                        }}
                      >
                        <Button
                          variant="contained"
                          size="large"
                          key={questions.id}
                          onClick={() => handleSolve(questions.id)}
                        >
                          Solve
                        </Button>
                      </NavLink>
                    </CardActions>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Subject;
