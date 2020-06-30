/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import Shared_FormInput from "../../components/shared/form-input";
import Shared_Button from "../../components/shared/button";
import Shared_ErrorModal from "../../components/shared/error-modal";
import Shared_LoadingSpinner from "../../components/shared/loading-spinner";
import Shared_ImageUpload from "../../components/shared/image-upload";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "../../utils/validators";
import AuthContext from "../../context/auth";
import { useForm } from "../../hooks/form";
import { useHttpClient } from "../../hooks/http-client";

const P_Places_New = () => {
  const inputs = [
    {
      id: "title",
      type: "text",
      label: "Title",
      validators: [VALIDATOR_REQUIRE()],
      errorMessage: "Please enter a valid title.",
    },
    {
      id: "description",
      type: "textarea",
      label: "Description",
      validators: [VALIDATOR_MINLENGTH(5)],
      errorMessage: "Please enter a valid description (atleast 5 characters).",
    },
    {
      id: "address",
      type: "text",
      label: "Address",
      validators: [VALIDATOR_REQUIRE(5)],
      errorMessage: "Please enter a valid address.",
    },
  ];
  const { token } = useContext(AuthContext);
  const validationInputsIds = [...inputs.map((input) => input.id), "image"];
  const [formState, handleInputChange] = useForm(validationInputsIds, false);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const history = useHistory();
  const handlePlaceSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("image", formState.inputs.image.value);
      await sendRequest("http://localhost:5000/api/places", "POST", formData, {
        Authorization: `Bearer ${token}`,
      });
      history.push("/");
    } catch (error) {}
  };
  return (
    <Fragment>
      <Shared_ErrorModal error={error} handleClear={clearError} />
      <form className="place-form" onSubmit={handlePlaceSubmit}>
        {isLoading && <Shared_LoadingSpinner asOverlay />}
        {inputs.map((input) => (
          <Shared_FormInput
            key={input.id}
            handleInputChange={handleInputChange}
            {...input}
          />
        ))}
        <Shared_ImageUpload
          id="image"
          handleFileInput={handleInputChange}
          errorMessage="Please provide an image."
        />
        <Shared_Button type="submit" disabled={!formState.isValid}>
          Add a Place
        </Shared_Button>
      </form>
    </Fragment>
  );
};

export default P_Places_New;
