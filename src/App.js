import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import TestSt from "./Component/TestSt";
import Navbar from "./Component/Navbar";
import FooterA from "./Component/FooterA";
import Modal1 from "./Component/Modal1";

function App() {
  return (
    <>
      {/* <Modal1 /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<TestSt />}></Route>
        {/* <Route path="/modal" element={<Modal />}></Route> */}
      </Routes>
      <FooterA />
    </>
  );
}

export default App;
