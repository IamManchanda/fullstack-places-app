import React from "react";

const Shared_Card = ({ className, children }) => (
  <div className={`card ${className}`}>{children}</div>
);

export default Shared_Card;
