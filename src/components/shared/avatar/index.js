import React from "react";

const C_Shared_Avatar = ({ name, image }) => (
  <div className="avatar">
    <img src={image} alt={name} title={name} />
  </div>
);

export default C_Shared_Avatar;
