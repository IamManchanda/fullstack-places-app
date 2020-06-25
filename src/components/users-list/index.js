/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Shared_Card from "../shared/card";
import UsersList_UserItem from "./user-item";

const UsersList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="users-list center h-full">
        <Shared_Card>
          <h2>No Users found.</h2>
        </Shared_Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {users.map((user) => (
        <UsersList_UserItem
          key={user.id}
          {...user}
          places={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
