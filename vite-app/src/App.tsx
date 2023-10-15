import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/use-service";
import useUsers from "./Hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUser = [...users];

    //update UI first and then call server:optimistic
    setUsers(users.filter((u) => u.id !== user.id));

    //call server
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUser); //if error is caught set back to original users
    });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Raveena" };
    setUsers([newUser, ...users]);

    //call server
    userService
      .add(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUser);
    });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border "></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
            //justify content-between is used to distribute space between items
            //d-flex: used to display flex
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>{" "}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
