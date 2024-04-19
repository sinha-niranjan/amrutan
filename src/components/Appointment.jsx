import React from "react";
import calendar from "../assets/calendar.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import activeCheck from "../assets/activeCheck.svg";

const Appointment = () => {
    const session = true;
  return (
    <>
      <div className="appointment-fee">
        <p>Appointment Fee</p>
        <h4>₹699.00</h4>
      </div>
      <div className="session-line">
        <p>Select your mode of session </p>
        <hr className="hr-line" />
      </div>
      <div className="options">
        <div className="option">
          <h5>In-Clinic</h5>
          <p>45 Mins</p>
        </div>
        <div className="option-active">
          <h5>Video{session && (<img src={activeCheck} alt="activeCheck" />)} </h5>
          <p>45 Mins</p>
        </div>
        <div className="option">
          <h5>Chat</h5>
          <p>10 Mins</p>
        </div>
      </div>

      <div className="session-line" style={{ maxWidth: "85%" }}>
        <p>Pick a time slot </p>
        <hr className="hr-line" />
        <img src={calendar} alt="calendar" />
      </div>

      <div className="dates">
        <img src={left} alt="" />
        <div className="date-grid">
          <div className="date-grid-item date-grid-item-active">
            <h3 style={{ color: "rgba(58, 100, 59, 1)", fontWeight: "600" }}>
              Mon, 10 Oct
            </h3>
            <p className="gray">10 slots</p>
          </div>{" "}
          <div className="date-grid-item">
            <h3>Tue, 11 Oct</h3>
            <p className="red">02 slots</p>
          </div>{" "}
          <div className="date-grid-item">
            <h3>Wed, 12 Oct</h3>
            <p className="yellow">05 slots</p>
          </div>
        </div>
        <img src={right} alt="right" />
      </div>
      <div className="times">
        <h3>Morning</h3>
        <div className="time-grid">
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
          <div className="time-grid-item">09:00 AM</div>
        </div>
      </div>

      <div className="times">
        <h3>Evening</h3>
        <div className="time-grid">
          <div className="time-grid-item">04:00 PM</div>
          <div className="time-grid-item">04:15 PM</div>
          <div className="time-grid-item">04:30 AM</div>
          <div className="time-grid-item">04:45 PM</div>
          <div className="time-grid-item">05:15 PM</div>
        </div>
      </div>
      <div className="appointment-btn ">Make An Appointment</div>
    </>
  );
};

export default Appointment;
