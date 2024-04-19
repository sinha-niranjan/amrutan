import React from "react";
import hair from "../assets/hair.svg";
import skin from "../assets/skin.svg";
import imune from "../assets/imune.svg";
import women from "../assets/women.svg";

const Special = () => {
  return (
    <>
      <div className="special-heading">
        <h2> I Specialize In</h2>
      </div>
      <div className="special-icons">
        <img src={hair} alt="hair" />
        <img src={skin} alt="skin" />
        <img src={imune} alt="imune" />
        <img src={women} alt="women" />
      </div>
    </>
  );
};

export default Special;
