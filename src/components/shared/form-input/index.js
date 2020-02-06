import React, { useReducer } from "react";
import { validate } from "../../../utils/validators";

const inputReducer = (state, { type, value, validators }) => {
  switch (type) {
    case "CHANGE":
      return {
        ...state,
        value,
        isValid: validate(value, validators),
      };
    case "TOUCH":
      return {
        ...state,
        isDirty: true,
      };
    default:
      return state;
  }
};

const Shared_FormInput = ({
  id,
  label,
  type,
  placeholder,
  rows,
  errorMessage,
  validators,
  children,
}) => {
  const [inputState, dispatchState] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isDirty: false,
  });
  const handleChange = event => {
    dispatchState({ type: "CHANGE", value: event.target.value, validators });
  };
  const handleTouch = () => {
    dispatchState({ type: "TOUCH" });
  };
  return (
    <div
      className={`form-control ${!inputState.isValid &&
        inputState.isDirty &&
        "form-control--invalid"}`}
    >
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows || 3}
          placeholder={placeholder || ""}
          value={inputState.value}
          onChange={handleChange}
          onBlur={handleTouch}
        />
      ) : (
        <input
          id={id}
          type={type || "text"}
          placeholder={placeholder || ""}
          value={inputState.value}
          onChange={handleChange}
          onBlur={handleTouch}
        />
      )}
      {!inputState.isValid && inputState.isDirty && <p>{errorMessage}</p>}
    </div>
  );
};

export default Shared_FormInput;
