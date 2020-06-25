/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";

import Shared_Card from "../shared/card";
import Shared_FormInput from "../shared/form-input";
import Shared_Button from "../shared/button";
import Shared_ErrorModal from "../shared/error-modal";
import Shared_LoadingSpinner from "../shared/loading-spinner";
import { useForm } from "../../hooks/form";
import AuthContext from "../../context/auth";

const Auth = ({ type, inputs, history }) => {
  const { login } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const validationInputsIds = inputs.map((input) => input.id);
  const [formState, handleInputChange] = useForm(validationInputsIds, false);
  const handleAuthSubmit = async (event) => {
    event.preventDefault();

    if (type === "signup") {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const responseData = await response.json();
        console.log({ responseData });
        setIsLoading(false);
        login();
        history.push("/");
      } catch (error) {
        setIsLoading(false);
        setError(error.message || "Something went wrong, please try again.");
      }
    }
  };
  const authContent = type === "login" ? "Login" : "signup" ? "Signup" : "";
  return (
    <Shared_Card className="authentication">
      {isLoading && <Shared_LoadingSpinner asOverlay />}
      <h2>{authContent} Required</h2>
      <hr />
      <form onSubmit={handleAuthSubmit}>
        {inputs.map((input) => (
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

export default withRouter(Auth);
