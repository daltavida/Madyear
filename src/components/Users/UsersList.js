import React from "react";

import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.map((user) => {
          return (
            <li>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
