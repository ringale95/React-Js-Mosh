import apiClient from "./api-client";

interface Entity{
    id:number
}

//any reference to user delete it or make it generic
class HttpService{

    //create update and delete
    endpoint : string;
    constructor(endpoint:string){
        this.endpoint = endpoint;
    }
    getAll<T>(){
        const Controller = new AbortController();
         const request = apiClient.get<T[]>(this.endpoint, {
          signal: Controller.signal,
        });
        return {request, cancel:() => Controller.abort() };
    }

    delete(id:number){
       return apiClient.delete(this.endpoint + id);

    }

    add<T>(entity:T){
       return apiClient.post(this.endpoint, entity)
    }

    update<T extends Entity>(entity:T){
        return apiClient.patch(this.endpoint + "/" +entity.id , entity)
    }

}
//we cant hardcode an endpoint like users as it cant be reusable so instead of exporting instance export function
// for creating an instance of this class
const create = (endpoint:string) => new HttpService(endpoint);
export default create;