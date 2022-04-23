import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterCountry, getCities, postCities, sortPopu } from '../Redux/Action/actionCity'
import "./Css/Css.css"
import { getCountries } from '../Redux/Action/actionCountry'
import axios from 'axios'
const CIty = () => {

  const [cityData, setCityData] = useState({
    CityName: "",
    Population: "",
    Name: ""
  })


  const reduxCountry = useSelector((store) => store.country.countries)   
  const reduxCity = useSelector((store) => store.city.city)

  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCountries())
  }, [])


  useEffect(() => {
    dispatch(getCities())
  }, [])
  const handleChange = async (e) => {
    const { name, value } = e.target
    setCityData({
      ...cityData, [name]: value
    })
  }


  const handleSubmitcity = async () => {
    console.log('cityData', cityData);
    dispatch(postCities(cityData))
  }


  const handleFilter = async (e) => {
    let value = e.target.value
    return await axios.get(`http://localhost:3000/city?Name=${value}`).then((payloads) => {
      dispatch(filterCountry(payloads.data))
    })
  }


  const handleSort = async (e) => {
    let value = e.target.value
    return await axios.get(`http://localhost:3000/city?_sort=${value}&_order=asc`).then((payloads) => {
      dispatch(sortPopu(payloads.data))
    })
  }


  const allData = async (e) => {
    dispatch(getCities())
  }


  async function handleDelete(id) {
    console.log('id', id);
    return await axios.delete(`http://localhost:3000/city/${id}`).then((payloads) => {
      dispatch(getCities())
    })
  }


  return (
    <div>
      <input type="text" name='CityName' placeholder='cityName' onChange={handleChange} />
      <input type="text" name='Population' placeholder='Population' onChange={handleChange} />


      <select id="select" name='Name' onChange={handleChange}>
        {
          reduxCountry.map((ele) => {
            return (
              <>
                <option value={ele.name} >{ele.name}</option>
              </>
            )
          })
        }
      </select>



      <button onClick={handleSubmitcity}>Add City</button>
      <br />
      <br />
      <br />


      <select name="SORT" id="SORT" onChange={handleSort}>
        <option  >Sort By ASCENDING</option>
        <option value="Population">Asc</option>
      </select>


      <select id="select" name='Name' onChange={handleFilter}>
        <option  >Filter By Country</option>
        {
          reduxCountry.map((ele) => {
            return (
              <>
                <option value={ele.name} >{ele.name}</option>
              </>
            )
          })
        }
      </select>


      <button onClick={allData}>Show All</button>

      
      <br />
      <br />
      <br />


      {
        reduxCity.length == 0 ? <div ><h1 >Nothing to display </h1></div> : <div>
          <div className='parent' >
            <div >`ID`</div>
            <div >`Country`</div>
            <div>`Population`</div>
            <div>`City`</div>
          </div>
          <br />
          <br />
          {
            reduxCity.map((ele, index) => {
              return (
                <div key={ele.id} className="parent">
                  <div>{index + 1}</div>
                  <div>{ele.Name}</div>
                  <div>{ele.CityName}</div>
                  <div>{ele.Population}</div>
                  <div ><button onClick={() => { handleDelete(ele.id) }}>`Delete`</button></div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}
export default CIty
