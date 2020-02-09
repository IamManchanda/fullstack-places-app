import { useCallback, useReducer } from "react";

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

export const useForm = (initialValidationInputsIds, initialFormValidity) => {
  const inputs = {};
  initialValidationInputsIds.forEach(id => {
    inputs[id] = {
      value: "",
      isValid: false,
    };
  });
  const [formState, dispatch] = useReducer(formReducer, {
    inputs,
    isValid: initialFormValidity,
  });
  const handleInputChange = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
  }, []);

  return [formState, handleInputChange];
};
