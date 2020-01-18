/* eslint-disable react/jsx-pascal-case */
import React from "react";
import C_UsersList_UserItem from "./user-item";
import C_Shared_Card from "../shared/card";

const C_UsersList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="center">
        <C_Shared_Card>
          <h2>No users found</h2>
        </C_Shared_Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {users.map(user => (
        <C_UsersList_UserItem key={user.id} {...user} />
      ))}
    </ul>
  );
};

export default C_UsersList;
