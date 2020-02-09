/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shared_FormInput from "../../../components/shared/form-input";
import Shared_Button from "../../../components/shared/button";
import Shared_Card from "../../../components/shared/card";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";
import { useForm } from "../../../hooks/form";

const P_Places_PlaceId_Edit = () => {
  const [isLoading, setLoading] = useState(true);

  const validationInputsIds = ["title", "description"];
  const [formState, handleInputChange, setFormData] = useForm(
    validationInputsIds,
    false,
  );
  const handlePlaceSubmit = event => {
    event.preventDefault();
    console.log({ formState });
  };

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

  useEffect(() => {
    if (currentPlace) {
      setFormData(
        {
          title: { value: currentPlace.title, isValid: true },
          description: { value: currentPlace.description, isValid: true },
        },
        true,
      );
    }
    setLoading(false);
  }, [currentPlace, setFormData]);

  if (!currentPlace) {
    return (
      <div className="center">
        <Shared_Card>
          <h2>Could not find a place.</h2>
        </Shared_Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={handlePlaceSubmit}>
      <Shared_FormInput
        id="title"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorMessage="Please enter a valid title."
        handleInputChange={handleInputChange}
        /* value={currentPlace.title} */
        value={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />

      <Shared_FormInput
        id="description"
        type="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorMessage="Please enter a valid description (atleast 5 characters)."
        handleInputChange={handleInputChange}
        /* value={currentPlace.description} */
        value={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />

      <Shared_Button type="submit" disabled={!formState.isValid}>
        Update a Place
      </Shared_Button>
    </form>
  );
};

export default P_Places_PlaceId_Edit;
