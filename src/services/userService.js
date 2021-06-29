import axios from "axios"

export default class UserService{
getUser(){
    return axios.get("http://localhost:8080/api/users/getall")
}
}