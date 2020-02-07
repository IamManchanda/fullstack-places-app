/* eslint-disable react/jsx-pascal-case */
import React, { useCallback, useReducer } from "react";
import Shared_FormInput from "../../components/shared/form-input";
import Shared_Button from "../../components/shared/button";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";

const formReducer = (state, { type, inputId, value, isValid }) => {
  switch (type) {
    case "INPUT_CHANGE":
      let isFormValid = true;
      for (const stateInputId in state.inputs) {
        if (state.inputs.hasOwnProperty(stateInputId)) {
          if (stateInputId === inputId) {
            isFormValid = isFormValid && isValid;
          } else {
            isFormValid = isFormValid && state.inputs[stateInputId].isValid;
          }
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [inputId]: {
            value,
            isValid,
          },
        },
        isValid: isFormValid,
      };
    default:
      return state;
  }
};

const P_Places_New = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });
  const handleInputChange = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
  }, []);
  return (
    <form className="place-form">
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
      <Shared_Button type="submit" disabled={!formState.isValid}>
        Add a Place
      </Shared_Button>
    </form>
  );
};

export default P_Places_New;
