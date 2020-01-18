import React from "react";
import { createPortal } from "react-dom";

const C_Shared_Backdrop = ({ handleClick }) => {
  const content = <div className="backdrop" onClick={handleClick}></div>;
  return createPortal(content, document.getElementById("backdrop-root"));
};

export default C_Shared_Backdrop;
