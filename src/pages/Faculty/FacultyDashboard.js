import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StudentDetails from "../../data/studentdetails.json";
import Divider from "@mui/material/Divider";
import { TableHead } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import DownloadFile from "../../components/DownloadFile";
import Navbar from "./Navbar";

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - StudentDetails.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  let noOfExp = Object.keys(StudentDetails[0].expmarks).length;

  const headers = [
    { label: "S. No" },
    { label: "JNTU Number"},
    ...[...Array(noOfExp)].map((e, i) => {
      return { label: `Exp ${i + 1}` };
    }),
  ]
  return (
    <>
    <Navbar />
    <DownloadFile data={StudentDetails} headers={headers} filename="studentdetails.csv" />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer component={Paper}>
          <Table
            stickyHeader
            aria-label="sticky table"
            sx={{
              minWidth: 650,
              [`& .${tableCellClasses.root}`]: {
                borderBottom: "none",
              },
            }}
          >
            <TableHead>
              <TableRow sx={{
                backgroundColor: "#f5f5f5",
                color: "#000",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}>
                <TableCell className="">S. No</TableCell>
                <TableCell>JNTU Number</TableCell>
                {[...Array(noOfExp)].map((e, i) => {
                  return <TableCell>Exp&nbsp;{i + 1} </TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? StudentDetails.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : StudentDetails
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell style={{ width: 140 }}>{row.jntu}</TableCell>
                  {[...Array(noOfExp)].map((e, i) => {
                    return <TableCell>{row.expmarks[i]}</TableCell>;
                  })}
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <Divider />
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={StudentDetails.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
