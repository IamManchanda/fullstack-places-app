/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const C_Navigation_SideDrawer = ({ show, handleClick, children }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={handleClick}>
        {children}
      </aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById("side-drawer-root"));
};

export default C_Navigation_SideDrawer;
