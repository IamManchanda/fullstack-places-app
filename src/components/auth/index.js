/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Shared_Card from "../shared/card";
import Shared_FormInput from "../shared/form-input";
import Shared_Button from "../shared/button";
import { useForm } from "../../hooks/form";

const Auth = ({ type, inputs }) => {
  const validationInputsIds = inputs.map(input => input.id);
  const [formState, handleInputChange] = useForm(validationInputsIds, false);
  const handleAuthSubmit = event => {
    event.preventDefault();
    console.log({ formState, type });
  };
  const authContent = type === "login" ? "Login" : "signup" ? "Signup" : "";
  return (
    <Shared_Card className="authentication">
      <h2>{authContent} Required</h2>
      <hr />
      <form onSubmit={handleAuthSubmit}>
        {inputs.map(input => (
          <Shared_FormInput
            key={input.id}
            handleInputChange={handleInputChange}
            {...input}
          />
        ))}
        <Shared_Button type="submit" disabled={!formState.isValid}>
          {authContent.toUpperCase()}
        </Shared_Button>
      </form>
    </Shared_Card>
  );
};

export default Auth;
