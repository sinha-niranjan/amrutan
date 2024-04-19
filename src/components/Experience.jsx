import React from "react";
import hospital from "../assets/hospital.svg";

const Experience = () => {
  return (
    <>
      <div className="experience-heading">
        <h2>My Work Experience </h2>
      </div>
      <div className="experience-details">
        <h3> I HAVE BEEN IN PRACTICE FOR : 7+ YEARS </h3>
        <hr />
        <div className="experience-period">
          <img src={hospital} alt="hospital" />
          <div>
            <h4>Midtown Medical Clinic </h4>
            <p>Senior doctor</p>
          </div>

          <p>2016-PRESENT</p>
        </div>
        <div className="experience-period">
          <img src={hospital} alt="hospital" />
          <div>
            <h4>Midtown Medical Clinic </h4>
            <p>Senior doctor</p>
          </div>

          <p>2016-PRESENT</p>
        </div>
      </div>
    </>
  );
};

export default Experience;
