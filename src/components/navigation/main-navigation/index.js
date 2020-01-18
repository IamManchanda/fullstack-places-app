/* eslint-disable react/jsx-pascal-case */
import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Navigation_MainHeader from "../main-header";
import Navigation_SideDrawer from "../side-drawer";
import Navigation_NavLinks from "../nav-links";
import Shared_Backdrop from "../../shared/backdrop";

const Navigation_MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Shared_Backdrop handleClick={handleCloseDrawer} />}
      <Navigation_SideDrawer
        show={drawerIsOpen}
        handleClick={handleCloseDrawer}
      >
        <nav className="main-navigation__drawer-nav">
          <Navigation_NavLinks />
        </nav>
      </Navigation_SideDrawer>
      <Navigation_MainHeader>
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
          <Navigation_NavLinks />
        </nav>
      </Navigation_MainHeader>
    </Fragment>
  );
};

export default Navigation_MainNavigation;
