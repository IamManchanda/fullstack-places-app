/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_FormInput from "../../components/shared/form-input";
import Shared_Button from "../../components/shared/button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { useForm } from "../../hooks/form";

const P_Places_New = () => {
  const validationInputsIds = ["title", "description", "address"];
  const [formState, handleInputChange] = useForm(validationInputsIds, false);
  const handlePlaceSubmit = event => {
    event.preventDefault();
    console.log({ formState });
  };
  return (
    <form className="place-form" onSubmit={handlePlaceSubmit}>
      <Shared_FormInput
        id="title"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        handleInputChange={handleInputChange}
        errorMessage="Please enter a valid title."
      />
      <Shared_FormInput
        id="description"
        type="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        handleInputChange={handleInputChange}
        errorMessage="Please enter a valid description (atleast 5 characters)."
      />
      <Shared_FormInput
        id="address"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE(5)]}
        handleInputChange={handleInputChange}
        errorMessage="Please enter a valid address."
      />
      <Shared_Button type="submit" disabled={!formState.isValid}>
        Add a Place
      </Shared_Button>
    </form>
  );
};

export default P_Places_New;
