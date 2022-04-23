import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postCountrries, getCountries } from '../Redux/Action/actionCountry'


const Country = () => {


  useEffect(() => {
    dispatch(getCountries())
  }, [])


  const dispatch = useDispatch()
  const Countrys = useSelector((store) => store.country.countries)
  const [country, setCountry] = useState("")


function getDAta (){
  axios.get("http://localhost:3000/country").then((res)=>{

    dispatch({ type: GET_COUNTRY, payload: res.data })
    getCountries()

  })
}

  const handleSubmit = () => {
    dispatch(postCountrries({ name: country }))
  }
  console.log('From Redux', Countrys);



  return (
    <div>
      <input type="text" placeholder='country' onChange={(e) => setCountry(e.target.value)} />
      <button onClick={handleSubmit}>Add Country</button>
    </div>
  )
}
export default Country
