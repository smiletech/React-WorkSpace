import React from "react";
import rec from "../Component/React.png";
import angularquiz from "../Component/angular.png";
import TestCard from "./TestCard";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="ComponentCard">
        <TestCard
          Title="Angular-01"
          discription="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript."
          urlImg={angularquiz}
        />

        <TestCard
          Title="React-01"
          discription="When I first started learning to test my apps back in the day, I would get very frustrated with the different types."
          urlImg={rec}
        />
        <TestCard
          Title="Angular-02"
          discription="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript."
          urlImg={angularquiz}
        />
        <TestCard
          Title="React-02"
          discription="Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript."
          urlImg={rec}
        />
      </div>
    </div>
  );
}

export default Home;
