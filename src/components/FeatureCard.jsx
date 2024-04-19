import React from "react";
import user from "../assets/user.svg";
import Stars from "./Stars";

const FeatureCard = () => {
  return (
    <div className="feature-review">
      <div className="review-user">
        <img src={user} alt="user" />
        <div>
          <h4>Alicent Hightower</h4>
          <p>Consulted for Skin care</p>
        </div>
        <p>20 January 2023</p>
      </div>
      <div className="review-star">
         <Stars count={5} />
      </div>
      <div className="review-description">
        <p>
          Might be bit early to confirm but yes I can see noticeable difference
          in my hairfall. will write again after using it for longer periods
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
