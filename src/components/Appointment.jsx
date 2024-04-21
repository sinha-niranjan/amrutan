import React, { useState } from "react";
import calendar from "../assets/calendar.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import activeCheck from "../assets/activeCheck.svg";

const options = [
  {
    heading: "In-Clinic",
    time: "45 Mins",
  },
  {
    heading: "Video",
    time: "45 Mins",
  },
  {
    heading: "Chat",
    time: "10 Mins",
  },
];

const times = [
  "09:00 AM",
  "09:30AM",
  "10:00 AM",
  "10:45 AM",
  "11:00 AM",
  "11:30 AM",
  "04:00 PM",
  "04:15 PM",
  "04:30 PM",
  "04:45 PM",
  "05:15 PM",
];

const Appointment = () => {
  const [val, setVal] = useState(0);
  const [timeActive, setTimeActive] = useState(2);

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
        {options.map((option, indx) => (
          <div
            key={indx}
            className={val == indx ? "option-active" : "option"}
            onClick={() => setVal(indx)}
          >
            <h5>
              {option.heading}
              {val == indx && <img src={activeCheck} alt="activeCheck" />}{" "}
            </h5>
            <p>{option.time}</p>
          </div>
        ))}
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
          {times.map(
            (time, indx) =>
              time.includes("AM") && (
                <div
                  key={indx}
                  className={
                    timeActive !== indx
                      ? "time-grid-item"
                      : "time-grid-item-active"
                  }
                  onClick={() => setTimeActive(indx)}
                >
                  {time}
                </div>
              )
          )}
        </div>
      </div>

      <div className="times">
        <h3>Evening</h3>
        <div className="time-grid">
          {times.map(
            (time, indx) =>
              time.includes("PM") && (
                <div
                  key={indx}
                  className={
                    timeActive !== indx
                      ? "time-grid-item"
                      : "time-grid-item-active"
                  }
                  onClick={() => setTimeActive(indx)}
                >
                  {time}
                </div>
              )
          )}
        </div>
      </div>
      <div className="appointment-btn ">Make An Appointment</div>
    </>
  );
};

export default Appointment;
