import apiClient from "./api-client";


export interface User {
    id: number;
    name: string;
  }

class UserService{

    //create update and delete
    getAllUsers(){
        const Controller = new AbortController();
         const request = apiClient.get<User[]>("/users", {
          signal: Controller.signal,
        });
        return {request, cancel:() => Controller.abort() };
    }

    deleteUser(id:number){
       return apiClient.delete("/users" + id);

    }

    addUser(user:User){
       return apiClient.post("/users", user)
    }

    updatedUser(user:User){
        return apiClient.patch("/users/" + user.id , user)
    }

}
export default new UserService();