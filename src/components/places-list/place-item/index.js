/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_Card from "../../shared/card";

const PlacesList_PlaceItem = ({
  id,
  image,
  title,
  description,
  address,
  creator,
  location,
}) => (
  <li className="place-item">
    <Shared_Card className="place-item__content">
      <div className="place-item__image">
        <img src={image} alt={title} title={title} />
      </div>
      <div className="place-item__info">
        <h2>{title}</h2>
        <h3>{address}</h3>
        <p>{description}</p>
      </div>
      <div className="place-item__actions">
        <button>View on Map</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </Shared_Card>
  </li>
);

export default PlacesList_PlaceItem;
