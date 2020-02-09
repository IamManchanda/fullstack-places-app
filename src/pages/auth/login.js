/* eslint-disable react/jsx-pascal-case */
import React from "react";

import Shared_Card from "../../components/shared/card";
import Shared_FormInput from "../../components/shared/form-input";
import Shared_Button from "../../components/shared/button";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../utils/validators";
import { useForm } from "../../hooks/form";

const P_Auth_Login = () => {
  const validationInputsIds = ["email", "password"];
  const [formState, handleInputChange] = useForm(validationInputsIds, false);
  const handleLoginSubmit = event => {
    event.preventDefault();
    console.log({ formState });
  };
  return (
    <Shared_Card className="authentication">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleLoginSubmit}>
        <Shared_FormInput
          id="email"
          type="email"
          label="E-mail"
          handleInputChange={handleInputChange}
          validators={[VALIDATOR_EMAIL()]}
          errorMessage="Please enter a valid email address."
        />
        <Shared_FormInput
          id="password"
          type="password"
          label="Password"
          handleInputChange={handleInputChange}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Please enter a valid password, atleast 5 characters long."
        />
        <Shared_Button type="submit" disabled={!formState.isValid}>
          Login
        </Shared_Button>
      </form>
    </Shared_Card>
  );
};

export default P_Auth_Login;
