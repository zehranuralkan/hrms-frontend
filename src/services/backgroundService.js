import axios from "axios"

export default class BackgroundService{
getBackground(){
    return axios.get("http://localhost:8080/api/backgrounds/getAll")
}
}