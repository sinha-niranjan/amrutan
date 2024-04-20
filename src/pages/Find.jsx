import React from "react";
import "../styles/Find.css";
import location from "../assets/location.svg";
import { FaArrowRight } from "react-icons/fa6";
import ProfileCard from "../components/ProfileCard";
import { RxCross2 } from "react-icons/rx";

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
      <div className="find-filters">
        <select name="" id="">
          <option value="">Expertise</option>
          <option value="">others</option>
        </select>
        <select name="" id="">
          <option value="">Gender</option>
          <option value="">others</option>
        </select>
        <select name="" id="">
          <option value="">Fees</option>
          <option value="">others</option>
        </select>
        <select name="" id="">
          <option value="">Language</option>
          <option value="">others</option>
        </select>
        <select
          name=""
          id=""
          style={{
            backgroundColor: "rgba(220, 238, 220, 1)",
          }}
        >
          <option value="">All Filters</option>
          <option value="">others</option>
        </select>
      </div>
      <hr />
      <div className="filter-added">
        <div>
          <p>Hair Care</p>
          <RxCross2 />
        </div>{" "}
        <div>
          <p>Female</p>
          <RxCross2 />
        </div>{" "}
        <div>
          <p>Rs.0-Rs.500</p>
          <RxCross2 />
        </div>
        <div>
          <p>Hindi</p>
          <RxCross2 />
        </div>
      </div>
      <div className="profile-grid">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};

export default Find;
