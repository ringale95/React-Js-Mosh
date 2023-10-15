import apiClient, { CanceledError } from "../services/api-client";
import { useEffect, useState } from "react";
import { User } from "../services/use-service";
import userService from "../services/use-service";


const useUsers = () =>{

        const [users, setUsers] = useState<User[]>([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);
      
        useEffect(() => {
          setLoading(true);
          const { request, cancel } = userService.getAll<User>();
          request
            .then((res) => {
              setUsers(res.data);
              setLoading(false);
            })
            .catch((err) => {
              if (err instanceof CanceledError) return;
              setError(err.message);
              setLoading(false);
            });
          return () => cancel();
        }, []);

        return {users, error, isLoading, setUsers, setError};
}
export default useUsers;
