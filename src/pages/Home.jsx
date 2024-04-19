import React from "react";
import Banner from "../components/Banner";
import "../styles/Home.css";
import About from "../components/About";
import Special from "../components/Special";
import Concern from "../components/Concern";
import Experience from "../components/Experience";
import Feature from "../components/Feature";

const Home = () => {
  return (
    <div className="home-main">
      <Banner />
      <div className="home-section">
        <div className="left-side">
          <div className="about-box">
            <About />
          </div>
          <div className="special-box">
            <Special />
          </div>
          <div className="concern-box">
            <Concern />
          </div>
          <div className="experience-box">
            <Experience />
          </div>
          <div className="feature-box">
            <Feature />
          </div>
        </div>
        <div className="right-side"> This is right side</div>
      </div>
    </div>
  );
};

export default Home;
