

import { ADD_COUNTRY, GET_COUNTRY } from '../ActionType/actionTypeCountry'

const initState = {
    countries : ["learn"]
}


export const reducerCountry = (store = initState, {type, payload})=>{
    switch(type){
        case ADD_COUNTRY : return {...store, countries  : [...store.countries, payload]}
        case GET_COUNTRY : return {...store, countries  : payload}
        default : return store
    }
} 
