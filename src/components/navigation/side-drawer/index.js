/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { createPortal } from "react-dom";

const C_Navigation_SideDrawer = ({ children }) => {
  const content = <aside className="side-drawer">{children}</aside>;
  return createPortal(content, document.getElementById("side-drawer-root"));
};

export default C_Navigation_SideDrawer;
