import React from "react";
import "../styles/Find.css";
import location from "../assets/location.svg";
import { FaArrowRight } from "react-icons/fa6";

const Find = () => {
  return (
    <div className="find-main">
      <div className="find-banner">
        <h2>Find Expert Doctors For An In-Clinic Session Here</h2>
        <div className="finding-options">
          <div className="location">
            <img src={location} alt="location" />

            <select id="select-location">
              <option value={""}>Select Location</option>
              <option value="other locations">Other Locations ....</option>
            </select>
          </div>
          <div className="find-services">
            <input
              type="text"
              name=""
              id=""
              className="service-search"
              placeholder="eg. Doctor, specialisation, clinic name"
                      />
                      <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Find;
