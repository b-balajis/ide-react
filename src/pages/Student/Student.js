import React from 'react';
import { useParams } from 'react-router-dom';
import ListofSubjects from "./ListofSubjects"
import Navbar from "./Navbar";
// import { Routes, Route } from 'react-router-dom';

const Student = () => {
  const { type } = useParams();
  return (
    <>
    <Navbar />
    <ListofSubjects />
    </>
  )
}

export default Student
