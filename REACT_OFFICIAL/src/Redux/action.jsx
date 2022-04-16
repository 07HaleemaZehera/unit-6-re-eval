import { GET_USERS } from "./actionTypes";
import axios from "axios"


const getUsers=(users)=>({
type:GET_USERS,
payload:users,
})



export  const loadUsers=()=>{
    return function(dispatch){
        axios.get(`http://localhost:3004/user`).then((res)=>{
            console.log("res",res)
            dispatch(getUsers(res.data))
        }).catch((err)=>console.log(err))

    }
    
}