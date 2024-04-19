import React from "react";
import { GrAdd } from "react-icons/gr";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/insta.svg";
import youtube from "../assets/youtube.svg";
import x from "../assets/x.svg";

const About = () => {
  return (
    <>
      <div className="about-box-heading">
        <h2> A Little About me </h2>
        <div className="btn">
          <p>Follow</p> <GrAdd />{" "}
        </div>
      </div>
      <div className="about-description">
        <p>
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the
        </p>
        <div className="read-more">
          <hr className="hr-line" /> <p>Read more </p>
        </div>
      </div>
      <div className="language-box">
        <h3>Language Spoken </h3>
        <p>English</p>
        <p>Hindi</p>
        <p>Telugu</p>
      </div>
      <div className="about-icons">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={youtube} alt="youtube" />
        <img src={x} alt="x" />
      </div>
    </>
  );
};

export default About;
