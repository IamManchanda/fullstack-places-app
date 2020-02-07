/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Shared_FormInput from "../../../components/shared/form-input";
import Shared_Button from "../../../components/shared/button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";

const P_Places_PlaceId_Edit = () => {
  const [places] = useState([
    {
      id: "p1",
      image:
        "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world.",
      address: "20 W 34th St, New York, NY 10001, United States",
      creator: "u1",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
    },
    {
      id: "p2",
      image:
        "https://untappedcities.com/wp-content/uploads/2015/07/Flatiron-Building-Secrets-Roof-Basement-Elevator-Sonny-Atis-GFP-NYC_5.jpg",
      title: "Empire State Building",
      description: "One of the most famous sky scrapers in the world.",
      address: "20 W 34th St, New York, NY 10001, United States",
      creator: "u2",
      location: {
        lat: 40.7484405,
        lng: -73.9878531,
      },
    },
  ]);
  const { placeId } = useParams();
  const currentPlace = places.find(place => place.id === placeId);
  console.log({ currentPlace });
  if (!currentPlace) {
    return (
      <div className="center">
        <h2>Could not find a place.</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Shared_FormInput
        id="title"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorMessage="Please enter a valid title."
        handleInputChange={() => {}}
        value={currentPlace.title}
        valid={true}
      />
      <Shared_FormInput
        id="description"
        type="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMessage="Please enter a valid description (atleast 5 characters)."
        handleInputChange={() => {}}
        value={currentPlace.description}
        valid={true}
      />
      <Shared_Button type="submit" disabled={true}>
        Update a Place
      </Shared_Button>
    </form>
  );
};

export default P_Places_PlaceId_Edit;
