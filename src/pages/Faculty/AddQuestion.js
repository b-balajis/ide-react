import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";

const theme = createTheme();

const AddQuestion = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    console.log("data", data);
  };

  const [textareaFields, setTextareaFields] = useState([]);
  const [textcaseInput, setTextcaseInput] = useState([]);
  const [textcaseOutput, setTextcaseOutput] = useState([]);

  const handleAddTextarea = () => {
    setTextareaFields([...textareaFields, { value: "" }]);
  };

  const handleTextareaChange = (event, index) => {
    console.log("event", event.target.value);
    const newTextareaFields = [...textareaFields];
    newTextareaFields[index].value = event.target.value;
    setTextareaFields(newTextareaFields);
  };

  const handleRemoveTextarea = (index) => {
    const newTextareaFields = [...textareaFields];
    newTextareaFields.splice(index, 1);
    setTextareaFields(newTextareaFields);
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Question
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  name="question"
                  required
                  fullWidth
                  id="question"
                  label="Question Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="sampleinput"
                  label="Sample Input "
                  name="sampleinput"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="sampleoutput"
                  label="Sample Output"
                  name="sampleoutput"
                />
              </Grid>
            </Grid>
            <div className=  "mt-4">
              <Button onClick={handleAddTextarea} variant="outlined">
                Add TextCases
              </Button>
              {textareaFields.map((textareaField, index) => (
                <div key={index} className="mt-2">
                  <div className="flex justify-between">
                    <div>TestCase : {index + 1}</div>
                    <div>
                      <Button onClick={() => handleRemoveTextarea(index)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                  <Grid item xs={12} marginY={2}>
                    <TextField
                      required
                      fullWidth
                      id="input"
                      label={"Textcase Input " + (index+1)}
                      name="input"
                      value={textcaseInput.value}
                      onChange={(e) => handleTextareaChange(e, index)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="output"
                      label={"Textcase Output " + (index+1)}
                      name="output"
                      value={textcaseOutput.value}
                      onChange={(e) => handleTextareaChange(e, index)}
                    />
                  </Grid>
                </div>
              ))}
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1,
                fontSize: "18px",
                width: "70%",
                ml: "15%",
              }}
            >
              Add Subject
            </Button>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
};

export default AddQuestion;
