/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Shared_FormInput from "../../../components/shared/form-input";
import Shared_Button from "../../../components/shared/button";
import Shared_Card from "../../../components/shared/card";
import Shared_ErrorModal from "../../../components/shared/error-modal";
import Shared_LoadingSpinner from "../../../components/shared/loading-spinner";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validators";
import { useForm } from "../../../hooks/form";
import { useHttpClient } from "../../../hooks/http-client";
import AuthContext from "../../../context/auth";

const P_Places_PlaceId_Edit = () => {
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
  ];
  const { userId } = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const [loadedPlace, setLoadedPlace] = useState();
  const validationInputsIds = inputs.map((input) => input.id);
  const history = useHistory();
  const [formState, handleInputChange, setFormData] = useForm(
    validationInputsIds,
    false,
  );
  const { placeId } = useParams();
  useEffect(() => {
    (async function fetchPlace() {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/${placeId}`,
        );
        setLoadedPlace(responseData.place);
        setFormData(
          {
            title: {
              value: responseData.place.title,
              isValid: true,
            },
            description: {
              value: responseData.place.description,
              isValid: true,
            },
          },
          true,
        );
      } catch (error) {}
    })();
  }, [sendRequest, placeId, setFormData]);
  const handlePlaceSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/places/${placeId}`,
        "PATCH",
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
        }),
        {
          "Content-Type": "application/json",
        },
      );
      history.push(`/users/${userId}/places`);
    } catch (error) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <Shared_LoadingSpinner />
      </div>
    );
  }

  if (!loadedPlace && !error) {
    return (
      <div className="center">
        <Shared_Card>
          <h2>Could not find a place.</h2>
        </Shared_Card>
      </div>
    );
  }

  return (
    <Fragment>
      <Shared_ErrorModal error={error} handleClear={clearError} />
      {!isLoading && loadedPlace && (
        <form className="place-form" onSubmit={handlePlaceSubmit}>
          {inputs.map((input) => (
            <Shared_FormInput
              key={input.id}
              handleInputChange={handleInputChange}
              value={loadedPlace[input.id]}
              valid={true}
              {...input}
            />
          ))}
          <Shared_Button type="submit" disabled={!formState.isValid}>
            Update a Place
          </Shared_Button>
        </form>
      )}
    </Fragment>
  );
};

export default P_Places_PlaceId_Edit;
