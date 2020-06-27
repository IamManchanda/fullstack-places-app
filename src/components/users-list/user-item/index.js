/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Link } from "react-router-dom";
import Shared_Card from "../../shared/card";
import Shared_Avatar from "../../shared/avatar";

const UsersList_UserItem = ({ id, name, image, places }) => (
  <li className="user-item">
    <Shared_Card className="user-item__content">
      <Link to={`/users/${id}/places`}>
        <div className="user-item__image">
          <Shared_Avatar name={name} image={`http://localhost:5000/${image}`} />
        </div>
        <div className="user-item__info">
          <h2>{name}</h2>
          <h3>
            {places} {places === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </Link>
    </Shared_Card>
  </li>
);

export default UsersList_UserItem;
