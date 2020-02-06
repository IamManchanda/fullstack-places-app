/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_FormInput from "../../components/shared/form-input";
import { VALIDATOR_REQUIRE } from "../../utils/validators";

const P_Places_New = () => (
  <form className="place-form">
    <Shared_FormInput
      type="text"
      label="Title"
      validators={[VALIDATOR_REQUIRE()]}
      errorMessage="Please enter a valid title."
    />
  </form>
);

export default P_Places_New;
