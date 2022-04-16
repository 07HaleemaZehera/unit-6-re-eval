import { GET_USERS } from "./actionTypes";

const initState = {
  users: [],
  user: {},
  loading: true,
};

export const usersReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.paylaod, loading: false };
    default:
      return state;
  }
};
