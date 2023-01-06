import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/material/Button";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";
import AddSharpIcon from '@mui/icons-material/AddSharp';

const Subject = () => {
  const SubjectQuestions = [
    {
      id: 1,
      question: "Write a program to print Hello World",
    },
    {
      id: 2,
      question: "Write a program to add two numbers",
    },
    {
      id: 3,
      question: "Write a program to find the factorial of a number",
    },
    {
      id: 4,
      question: "Write a program to find the sum of n natural numbers",
    },
  ];

  return (
    <>
      <div className="mt-16 left-10">
        <Button
          variant="contained"
          href="#contained-buttons"
          size="large"
          className="mt-10"
        >
          <span>
            <AddSharpIcon />
          </span>
          Add Question
        </Button>
        {SubjectQuestions?.map((question) => (
          <Box sx={{ minHeight: 150 }} className="mt-4">
            <Card
              variant="outlined"
              sx={(theme) => ({
                backgroundColor: "#202037",
                width: 1500,
                height: 100,
                gridColumn: "span 2",
                flexDirection: "row",
                flexWrap: "wrap",
                resize: "horizontal",
                overflow: "hidden",
                gap: "clamp(0px, (100% - 360px + 32px) * 999, 16px)",
                transition: "transform 0.3s, border 0.3s",
                "&:hover": {
                  borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                  transform: "translateY(-5px)",
                },
                "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
              })}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 1000,
                }}
              >
                <div className="flex">
                  <div className="flex">
                    <Avatar>{question.id}</Avatar>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      className="ml-2 mt-2"
                    >
                      {question.question}
                    </Typography>
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      size="large"
                      className="mt-10"
                    >
                      <span>
                        <ModeEditSharpIcon />
                      </span>
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      href="#contained-buttons"
                      className="mt-10"
                      color="error"
                    >
                      <span>
                        <DeleteForeverRoundedIcon />
                      </span>
                      Delete
                    </Button>
                  </div>
                </div>
              </Box>
            </Card>
          </Box>
        ))}
      </div>
      {/* <Box sx={{ minHeight: 350 }}>
      <Card
        variant="outlined"
        sx={(theme) => ({
          width: 300,
          gridColumn: 'span 2',
          flexDirection: 'row',
          flexWrap: 'wrap',
          resize: 'horizontal',
          overflow: 'hidden',
          gap: 'clamp(0px, (100% - 360px + 32px) * 999, 16px)',
          transition: 'transform 0.3s, border 0.3s',
          '&:hover': {
            borderColor: theme.vars.palette.primary.outlinedHoverBorder,
            transform: 'translateY(-2px)',
          },
          '& > *': { minWidth: 'clamp(0px, (360px - 100%) * 999,100%)' },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 200,
          }}
        >
          <AspectRatio
            variant="soft"
            sx={{
              '--AspectRatio-paddingBottom':
                'clamp(0px, (100% - 200px) * 999, 200px)',
              pointerEvents: 'none',
            }}
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?auto=format&fit=crop&w=2262"
            />
          </AspectRatio>
          <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
            <Avatar variant="soft" color="neutral">
              Y
            </Avatar>
            <div>
              <Typography level="body2">Designed by</Typography>
              <Typography fontWeight="lg" level="body2">
                Nature itself
              </Typography>
            </div>
          </Box>
        </Box>
      </Card>
    </Box> */}
    </>
  );
};

export default Subject;
