import React from "react";
import "../styles/Banner.css";
import backgroundImage from "../assets/background-banner.png";
import avatar from "../assets/avatar.png";

const banner = () => {
  return (
    <div className="banner-main">
      <div className="background-img">
        <img src={backgroundImage} alt="backgroun-image" />
      </div>
      <div className="profile-details">
        <div className="profile">
          <div className="user">
            <img src={avatar} alt="Avatar" />
            <div className="user-details">
              <div className="user-name">
                <h2>Dr. Brue Willis</h2>
                <p>Gynecologist</p>
              </div>
              <div className="user-rating">4.2</div>
            </div>
          </div>
          <div className="data">
            <div>
              <p>Followers</p>
              <p>850</p>
            </div>
            <div>
              <p>Following</p>
              <p>18K</p>
            </div>
            <div>
              <p>Posts</p>
              <p>250</p>
            </div>
          </div>
          <div className="book-btn">Book an Appointment</div>
        </div>
      </div>
    </div>
  );
};

export default banner;
