import axios from "../axios"
export const user = ()=>{
    return axios.get("/")
}
