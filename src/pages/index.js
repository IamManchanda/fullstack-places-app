/* eslint-disable react/jsx-pascal-case */
import React, { Fragment, useEffect, useState } from "react";
import UsersList from "../components/users-list";
import Shared_ErrorModal from "../components/shared/error-modal";
import Shared_LoadingSpinner from "../components/shared/loading-spinner";

const P_Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState(false);
  useEffect(
    function handleLoadedUsers() {
      (async function fetchUsers() {
        setIsLoading(true);
        try {
          const response = await fetch("http://localhost:5000/api/users");
          const responseData = await response.json();
          if (!response.ok) {
            throw new Error(responseData.message);
          }
          setLoadedUsers(responseData.users);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      })();
    },
    [error.message],
  );
  const handleError = () => setError(null);
  return (
    <Fragment>
      <Shared_ErrorModal error={error} handleClear={handleError} />
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
