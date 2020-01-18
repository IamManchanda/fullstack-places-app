/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_Card from "../shared/card";
import PlacesList_PlaceItem from "./place-item";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <div className="places-list center h-full">
        <Shared_Card>
          <h2>No Places found. Maybe Create One?</h2>
          <button>Share Place</button>
        </Shared_Card>
      </div>
    );
  }
  return (
    <ul className="places-list">
      {places.map(place => (
        <PlacesList_PlaceItem key={place.id} {...place} />
      ))}
    </ul>
  );
};

export default PlacesList;
