import React from "react";

const Users = ({ data }) => {
  return (
    <div>
      <h4>{data.username}</h4>
      <p>{data.id}</p>
    </div>
  );
};

export default Users;
