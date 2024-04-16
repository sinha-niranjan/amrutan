import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="heading">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="page-links">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/find"}
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          Find Doctors
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? "active" : "not-active")}
        >
          About Us
        </NavLink>
      </div>
      <div className="auth-btn">
        <div className="login-btn btn">Login</div>
        <div className="signup-btn btn">Sign-up</div>
      </div>
    </div>
  );
};

export default Header;
