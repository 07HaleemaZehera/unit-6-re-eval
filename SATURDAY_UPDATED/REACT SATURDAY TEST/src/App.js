import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Country from './Components/Country'
import CIty from './Components/CIty'
function App() {
  return (
    <>
      <h3>Your Choice</h3>
      <div>
        <Link to={'/add-country'}>Add-Country</Link> <br></br> <br></br>
        <Link to={'/add-city'}>Add-City</Link>
      </div>
      <Routes>
        <Route path="/" element={< home />} />
        <Route path="/add-country" element={< Country />} />
        <Route path="/add-city" element={< CIty />} />
      
      </Routes>
     
    </>
  )
}
export default App
