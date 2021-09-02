import React, { useEffect, useState } from "react";

import Users from "./Users";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://super-iffy-backend.herokuapp.com/api/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {users.map((user) => {
        return <Users data={user} key={uuidv4()} />;
      })}
    </div>
  );
};

export default UsersList;
