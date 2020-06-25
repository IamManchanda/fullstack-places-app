/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useEffect, useState } from "react";
import UsersList from "../components/users-list";
import Shared_ErrorModal from "../components/shared/error-modal";
import Shared_LoadingSpinner from "../components/shared/loading-spinner";
import { useHttpClient } from "../hooks/http-client";

const P_Index = () => {
  const [loadedUsers, setLoadedUsers] = useState(false);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  useEffect(
    function handleLoadedUsers() {
      (async function fetchUsers() {
        try {
          const responseData = await sendRequest(
            "http://localhost:5000/api/users",
          );
          setLoadedUsers(responseData.users);
        } catch (error) {}
      })();
    },
    [sendRequest],
  );
  return (
    <Fragment>
      <Shared_ErrorModal error={error} handleClear={clearError} />
      {isLoading && (
        <div className="center">
          <Shared_LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList users={loadedUsers} />}
    </Fragment>
  );
};

export default P_Index;
