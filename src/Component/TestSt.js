import React, { useEffect } from "react";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import { Question } from "../Question";
import { Link } from "react-router-dom";

function TestSt() {
  let NAME = "AngularMind";
  useEffect(() => {
    //  NAME = prompt("Enter Your Name");
    if (NAME === "") return;
  }, [NAME]);
  console.log(NAME);

  return (
    <>
      <div className="container">
        <div className="text-start">
          <AlarmOnIcon /> Welcome {NAME}
        </div>
        <div className="text-end">
          hello Navin
          <Link to="/modal">
            <button className="bg-primary ms-2">Submit</button>
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-sm-2 bg-light">
          <h3>Question Paper</h3>
          <div className="grid-container text-center">
            <div className="grid-item">1</div>
            <div className="grid-item">2</div>
            <div className="grid-item">3</div>
            <div className="grid-item">4</div>
            <div className="grid-item">5</div>
            <div className="grid-item">6</div>
            <div className="grid-item">7</div>
            <div className="grid-item">8</div>
            <div className="grid-item">9</div>
          </div>
        </div>
        {/*  */}
        <div className="col-sm-10 bg-info">
          <Question />
          <Question />
          <Question />
          <Question />
        </div>
      </div>
    </>
  );
}

export default TestSt;
