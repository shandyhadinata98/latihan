import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <p>SIMPLE Zoro APP </p>
      </li>
      <li>
        <NavLink to="/">Zoro</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
