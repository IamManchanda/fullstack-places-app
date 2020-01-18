import React from "react";

const Shared_Avatar = ({ name, image }) => (
  <div className="avatar">
    <img src={image} alt={name} title={name} />
  </div>
);

export default Shared_Avatar;
