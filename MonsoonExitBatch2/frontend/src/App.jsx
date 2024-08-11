import React from "react";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./components/Home";
import Add from "./components/Add"; // Import Add
import Update from "./components/Update"; // Import Update
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} /> {/* Add this line */}
      </Routes>
    </>
  );
}

export default App;
