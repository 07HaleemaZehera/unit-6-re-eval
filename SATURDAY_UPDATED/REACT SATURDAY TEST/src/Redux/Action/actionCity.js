import axios from 'axios'




import { FILTER_COUNTRY, GET_CITY, SORT_CITY , ADD_CITY} from "../ActionType/actionTypeCity"



export const postCities = (payload) => async (dispatch) => {
    try {
      axios.post("http://localhost:3000/city", payload).then((res)=>{
     

        dispatch({ type: ADD_CITY, payload: res.data })
        getCities()
      })
    } catch (error) {
      console.log('error', error)
    }
  }

  
  export const getCities = () => async (dispatch) => {
    try {
      axios.get("http://localhost:3000/city").then((res)=>{
      console.log('res', res);

        dispatch({ type: GET_CITY, payload: res.data })
      })
    } catch (error) {
      console.log('error', error)
    }
  }



  export const sortPopu = (payload) => {
    
    return{
        type : GET_CITY, payload : payload
    }

  }


  export const filterCountry = (payload) => {
    
    return{
        type : FILTER_COUNTRY, payload : payload
    }

  }