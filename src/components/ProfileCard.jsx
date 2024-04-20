import React from "react";
import profile from "../assets/profile.png";
import { IoIosLink } from "react-icons/io";
import { BiMessageDetail } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import Stars from "./Stars"
const ProfileCard = () => {
  return (
    <div className="profile-grid-item">
      <img src={profile} alt="profile" />
      <div className="profile-rating">
        <p>4.5 <Stars count={1} /></p>
      </div>
      <h2>Dr. Prerna Narang </h2>
      <div className="profile-detail">
        <IoIosLink /> <p> Male-Female Infertility </p>
      </div>
      <div className="profile-detail">
        <LuGraduationCap /> <h4> 7 Years of Experience </h4>
      </div>
      <div className="profile-detail">
        <BiMessageDetail /> <p> Speaks : English, Hindi, Marathi </p>
      </div>
      <div className="consultation">
        <div>
          <h3>Video Consultation</h3>
          <p>₹800</p>
        </div>
        <div>
          <h3>Chat Consultation</h3>
          <p>Free</p>
        </div>
      </div>
      <div className="view-profile-btn">View Profile</div>
      <div className="book-consultation-btn">Book a consultation</div>
    </div>
  );
};

export default ProfileCard;
