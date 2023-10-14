import axios, { AxiosError } from "axios";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const Controller = new AbortController();
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: Controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => Controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];

    //update UI first and then call server:optimistic
    setUsers(users.filter((u) => u.id !== user.id));

    //call server
    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser); //if error is caught set back to original users
      });
  };

  const addUser = () => {
    const originalUser = [...users];
    const newUser = { id: 0, name: "Raveena" };
    setUsers([newUser, ...users]);

    //call server
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
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
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
