import logo1 from "../quiz.jpeg";

import React from "react";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-Dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo1}
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            <h2>Quiz App</h2>
          </a>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
