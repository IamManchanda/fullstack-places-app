/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../context/auth";

const Navigation_NavLinks = props => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          All Users
        </NavLink>
      </li>
      {isLoggedIn ? (
        <Fragment>
          <li>
            <NavLink to="/users/u1/places">My Places</NavLink>
          </li>
          <li>
            <NavLink to="/places/new">Add New Place</NavLink>
          </li>
        </Fragment>
      ) : (
        <Fragment>
          <li>
            <NavLink to="/auth/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/auth/signup">Signup</NavLink>
          </li>
        </Fragment>
      )}
    </ul>
  );
};

export default Navigation_NavLinks;
