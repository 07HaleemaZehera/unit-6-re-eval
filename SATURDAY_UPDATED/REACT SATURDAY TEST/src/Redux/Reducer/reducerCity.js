import { ADD_CITY, FILTER_COUNTRY, GET_CITY } from "../ActionType/actionTypeCity";

const initState = {
    city : []
}
export const reducerCity = (store = initState , {type, payload})=>{

    switch(type){
        case ADD_CITY : return {...store, city : [...store.city, payload ]}
        case GET_CITY : return {...store, city  : payload}
        case FILTER_COUNTRY : return {...store, city  : payload}

        default : return store
    }
}