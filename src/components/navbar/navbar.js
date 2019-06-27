import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <ul>
      <li>
        <p>Sunstrike </p>
      </li>
      <li>
        <NavLink to="/">One Piece ga jelas</NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
