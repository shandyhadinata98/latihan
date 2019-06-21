import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <p>SIMPLE CATALOG APP </p>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
