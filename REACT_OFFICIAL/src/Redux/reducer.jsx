import { ADD_USERS, DELETE_USERS, GET_USERS ,GETSINGLE_USERS} from "./actionTypes";

const initState = {
  users: [],
  user: {},
  loading: true,
};

export const usersReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.paylaod, loading: false };


      case DELETE_USERS:
        return {...state,loading:false,};

        case ADD_USERS:
          case GETSINGLE_USERS:
            return {...state,user:action.payload,
            loading:false}
    default:
      return state;
  }
};
