import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <p>SIMPLE Sanji Dong APP </p>
      </li>
      <li>
        <NavLink to="/">Sanji Dong</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
