import React from "react";
let e = 0;
export const Question = () => {
  e++;
  return (
    <>
      <div className="card card-quest mx-2 my-1">
        <div className="card-body">
          How can we specify properties and methods for an object in TypeScript?
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={e} //
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={e} //
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Second default radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={e} //
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              Disabled radio
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name={e} //
              id="exampleRadios3"
              value="option4"
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              Disabled radio
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
