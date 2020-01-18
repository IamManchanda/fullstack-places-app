/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import C_Navigation_MainHeader from "../main-header";
import C_Navigation_NavLinks from "../nav-links";

const C_Navigation_MainNavigation = props => (
  <C_Navigation_MainHeader>
    <button className="main-navigation__menu-btn">
      {[...3].map((num, index) => (
        <span key={index} />
      ))}
    </button>
    <h1 className="main-navigation__title">
      <Link>Places App</Link>
    </h1>
    <nav className="main-navigation__header-nav">
      <C_Navigation_NavLinks />
    </nav>
  </C_Navigation_MainHeader>
);

export default C_Navigation_MainNavigation;
