import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  
  const addUserHandler = (username, age) => {
    setUsersList(oldState => {
      return [...oldState, {name: username, age}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={}/>
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
