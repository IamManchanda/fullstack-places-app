/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlacesList from "../../../components/places-list";
import Shared_ErrorModal from "../../../components/shared/error-modal";
import Shared_LoadingSpinner from "../../../components/shared/loading-spinner";
import { useHttpClient } from "../../../hooks/http-client";

const P_Users_UserId_Places = () => {
  const [loadedPlaces, setLoadedPlaces] = useState();
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const { userId } = useParams();
  useEffect(() => {
    (async function fetchPlaces() {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/places/user/${userId}`,
        );
        setLoadedPlaces(responseData.places);
      } catch (error) {}
    })();
  }, [sendRequest, userId]);
  return (
    <Fragment>
      <Shared_ErrorModal error={error} handleClear={clearError} />
      {isLoading && (
        <div className="center">
          <Shared_LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlacesList places={loadedPlaces} />}
    </Fragment>
  );
};

export default P_Users_UserId_Places;
