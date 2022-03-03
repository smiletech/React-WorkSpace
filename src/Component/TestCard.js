import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import React from "react";
// import { Routes, Route, Router } from "react-router-dom";
import { Link } from "react-router-dom";
// import TestSt from "./TestSt";

function TestCard({ Title, discription, urlImg }) {
  // const Routing = () => {
  // <Router>
  //   <Routes>
  //     <Route path={Title} element={<TestSt />}></Route>
  //   </Routes>
  // </Router>;
  // };

  return (
    <>
      <div className="mt-2 ms-2">
        <img src={urlImg} className="card-img-top card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{discription}</p>
          <Link to={`/${Title}`}>
            <button className="btn btn-primary">
              Start Test <DoubleArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default TestCard;
