/* eslint-disable react/jsx-pascal-case */
import React from "react";
import UsersList_UserItem from "./user-item";
import Shared_Card from "../shared/card";

const UsersList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="center">
        <Shared_Card>
          <h2>No users found</h2>
        </Shared_Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {users.map(user => (
        <UsersList_UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default UsersList;
