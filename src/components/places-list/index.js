/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_Card from "../shared/card";
import Shared_Button from "../shared/button";
import PlacesList_PlaceItem from "./place-item";

const PlacesList = ({ places, handleDelete }) => {
  if (!places || places.length === 0) {
    return (
      <div className="places-list center h-full">
        <Shared_Card>
          <h2>No Places found. Maybe Create One?</h2>
          <Shared_Button to="/places/new">Create Place</Shared_Button>
        </Shared_Card>
      </div>
    );
  }
  return (
    <ul className="places-list">
      {places.map((place) => (
        <PlacesList_PlaceItem
          key={place.id}
          {...place}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default PlacesList;
