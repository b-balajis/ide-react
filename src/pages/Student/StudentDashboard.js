import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Python from "../../data/python.json";
import Marks from "../../data/marks.json";
import Divider from "@mui/material/Divider";
import Navbar from "./Navbar"

export default function BasicTable() {
  return (
    <>
    <Navbar />
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <div className="flex w-full">
          <div className="w-9/12">
            <TableCell>S. No</TableCell>
            <TableCell>Question Name</TableCell>
          </div>
          <div className="3/12">
            <TableCell>Marks</TableCell>
            <TableCell>Grade</TableCell>
          </div>
        </div>
        <Divider />
        <TableBody>
          <div className="flex w-full">
            <div className="w-9/12">
              {Python.map((row) => (
                <TableRow>
                  <TableCell>{row.id}</TableCell>
                  <TableCell className="ml-8">{row.question}</TableCell>
                </TableRow>
              ))}
            </div>
            <div className="3/12">
              {Marks.map((mark) => (
                <TableRow>
                  <TableCell>{mark.marks}</TableCell>
                  <TableCell>{mark.grade}</TableCell>
                </TableRow>
              ))}
            </div>
          </div>
        </TableBody>
        <Divider />
      </Table>
    </TableContainer>
    </>
  );
}
