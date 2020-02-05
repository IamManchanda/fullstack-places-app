import React from "react";
import { createPortal } from "react-dom";

const Shared_Backdrop = ({ handleClick }) =>
  createPortal(
    <div className="backdrop" onClick={handleClick}></div>,
    document.getElementById("backdrop-root"),
  );

export default Shared_Backdrop;
