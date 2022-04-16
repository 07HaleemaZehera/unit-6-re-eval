import { DELETE_USERS, GET_USERS,ADD_USERS,GETSINGLE_USERS } from "./actionTypes";
import axios from "axios";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const userDeleted=()=>({
    type:DELETE_USERS
})
const userAdded=()=>({
    type:ADD_USERS
})
const getUser=(user)=>({
    type:GETSINGLE_USERS,
    payload:user,
})

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        console.log("res", res);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const deleteUsers = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API} /${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(userDeleted());
        dispatch(loadUsers())
      })
      .catch((err) => console.log(err));
  };
};
export const addUsers = (id) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}` )
      .then((res) => {
        console.log("res", res);
        dispatch(userAdded());
        dispatch(loadUsers())
      })
      .catch((err) => console.log(err));
  };
};
export const getSingleUsers = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}` )
      .then((res) => {
        console.log("res", res);
        dispatch(getUser(res.data));
        // dispatch(loadUsers())
      })
      .catch((err) => console.log(err));
  };
};
