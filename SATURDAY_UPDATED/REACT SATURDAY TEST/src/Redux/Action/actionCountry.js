import axios from 'axios'

import { ADD_COUNTRY, GET_COUNTRY } from '../ActionType/actionTypeCountry'


export const postCountrries = (payload) => async (dispatch) => {
  try {
   
    axios.post("http://localhost:3000/country", payload).then((res)=>{

      dispatch({ type: GET_COUNTRY, payload: res })
      getCountries()


      
    })

  } catch (error) {
    console.log('error', error)
  }
}






export const getCountries = () => async (dispatch) => {
  try {
    axios.get("http://localhost:3000/country").then((res)=>{

      dispatch({ type: GET_COUNTRY, payload: res.data })
      getCountries()

    })
  } catch (error) {
    console.log('error', error)
  }
}

