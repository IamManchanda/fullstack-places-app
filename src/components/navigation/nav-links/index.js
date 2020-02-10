/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation_NavLinks = props => (
  <ul className="nav-links">
    <li>
      <NavLink to="/" exact>
        All Users
      </NavLink>
    </li>
    <li>
      <NavLink to="/users/u1/places">My Places</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">Add New Place</NavLink>
    </li>
    <li>
      <NavLink to="/auth/login">Login</NavLink>
    </li>
    <li>
      <NavLink to="/auth/signup">Signup</NavLink>
    </li>
  </ul>
);

export default Navigation_NavLinks;
