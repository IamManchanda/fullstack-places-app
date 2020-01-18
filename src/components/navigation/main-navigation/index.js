/* eslint-disable react/jsx-pascal-case */
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import C_Navigation_MainHeader from "../main-header";
import C_Navigation_SideDrawer from "../side-drawer";
import C_Navigation_NavLinks from "../nav-links";
import C_Shared_Backdrop from "../../shared/backdrop";

const C_Navigation_MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <C_Shared_Backdrop handleClick={handleCloseDrawer} />}
      <C_Navigation_SideDrawer
        show={drawerIsOpen}
        handleClick={handleCloseDrawer}
      >
        <nav className="main-navigation__drawer-nav">
          <C_Navigation_NavLinks />
        </nav>
      </C_Navigation_SideDrawer>
      <C_Navigation_MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={handleOpenDrawer}
        >
          {[...3].map((num, index) => (
            <span key={index} />
          ))}
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Places App</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <C_Navigation_NavLinks />
        </nav>
      </C_Navigation_MainHeader>
    </Fragment>
  );
};

export default C_Navigation_MainNavigation;
