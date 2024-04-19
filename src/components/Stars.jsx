import React from "react";
import stars from "../assets/stars.svg";

const Stars = ({ count }) => {
  return (
    <>
      {" "}
      {[0, 1, 2, 3, 4]?.map((i) =>
        i < count ? <img src={stars} alt="stars" /> : null
      )}
    </>
  );
};

export default Stars;
