/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_FormInput from "../../components/shared/form-input";

const P_Places_New = () => (
  <form className="place-form">
    <Shared_FormInput
      type="text"
      label="Title"
      errorMessage="Please enter a valid title."
    />
  </form>
);

export default P_Places_New;
