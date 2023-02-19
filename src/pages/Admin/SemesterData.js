import React, { useState } from "react";
import Sem from "../../data/semesters.json";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import NativeSelect from "@mui/material/NativeSelect";

const SemesterData = (props) => {
  const { semester } = props;
  const [editingFaculty, setEditingFaculty] = useState(false);

  const displaySem = Sem[semester];
  const listofFaculty = displaySem[0].listofFaculty;

  const handleEditingFaculty = () => {
    setEditingFaculty(!editingFaculty);
  };

  const updatingSem = [...displaySem]

  const handleFacultyChange = (sectionIndex, allot, allotIndex, event) => {
    updatingSem[sectionIndex].allotment[allotIndex].faculty = event.target.value;
  }
  return (
    <>
      <h1 className="text-center">{semester}</h1>
      <div className="flex justify-end mr-10">
        <Button
          variant="outlined"
          startIcon={editingFaculty ? <DoneIcon /> : <EditIcon />}
          onClick={handleEditingFaculty}
        >
          {editingFaculty ? "Done" : "Edit"}
        </Button>
      </div>
      <div className="flex gap-10 mx-auto justify-center">
        {displaySem.map((sem, sectionIndex) => {
          return (
            <div key={sectionIndex} className="">
              <p className="text-center text-3xl font-bold mb-10">
                Section : {sem.section}
              </p>
              <div>
                {sem.allotment.map((allot, allotIndex) => {
                  return (
                    <div key={allotIndex} className="flex">
                      <p className="w-80">{allot.subject} :</p>
                      <Box sx={{ m: 1, minWidth: 400 }}>
                        <FormControl fullWidth>
                          <NativeSelect
                            defaultValue={allot.faculty}
                            disabled={!editingFaculty}
                            onChange={(event) => handleFacultyChange(sectionIndex, allot, allotIndex, event)}
                          >
                            {listofFaculty.map((faculty) => (
                              <option value={faculty}>{faculty}</option>
                            ))}
                          </NativeSelect>
                        </FormControl>
                      </Box>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SemesterData;
