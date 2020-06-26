/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Auth from "../../components/auth";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../utils/validators";

const P_Auth_Signup = () => {
  const inputs = [
    {
      id: "name",
      type: "name",
      label: "Name",
      validators: [VALIDATOR_REQUIRE()],
      errorMessage: "Please enter your Name.",
    },
    {
      id: "email",
      type: "email",
      label: "Email",
      validators: [VALIDATOR_EMAIL()],
      errorMessage: "Please enter a valid email address.",
    },
    {
      id: "password",
      type: "password",
      label: "Password",
      validators: [VALIDATOR_MINLENGTH(6)],
      errorMessage: "Please enter a valid password, atleast 6 characters long.",
    },
  ];
  return <Auth type="signup" inputs={inputs} />;
};

export default P_Auth_Signup;
