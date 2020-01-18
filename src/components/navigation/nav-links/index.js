/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { NavLink } from "react-router-dom";

const C_Navigation_NavLinks = props => (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>
        All users
      </NavLink>
    </li>
    <li>
      <NavLink to="/u1/places">My Places</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">Add New Place</NavLink>
    </li>
    <li>
      <NavLink to="/login">Login</NavLink>
    </li>
  </ul>
);

export default C_Navigation_NavLinks;
