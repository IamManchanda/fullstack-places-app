import React, { useReducer } from "react";

const inputReducer = (state, { type, value }) => {
  switch (type) {
    case "CHANGE":
      return {
        ...state,
        value,
        isValid: true,
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
  children,
}) => {
  const [inputState, dispatchState] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const handleChange = event => {
    dispatchState({ type: "CHANGE", value: event.target.value });
  };
  return (
    <div
      className={`form-control ${!inputState.isValid &&
        "form-control--invalid"}`}
    >
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={inputState.value}
          rows={rows || 3}
          placeholder={placeholder || ""}
          onChange={handleChange}
        />
      ) : (
        <input
          id={id}
          type={type || "text"}
          value={inputState.value}
          placeholder={placeholder || ""}
          onChange={handleChange}
        />
      )}
      {!inputState.isValid && <p>{errorMessage}</p>}
    </div>
  );
};

export default Shared_FormInput;
