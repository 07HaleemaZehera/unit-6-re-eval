
import './App.css';

import {Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"
import AddCountry from './components/AddCountry';
import Edit from "./components/Edit"



function App() {
  return (
    <div className='App'>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/addCountry" element={<AddCountry/>}></Route>
  <Route path="/editCountry/:id" element={<Edit/>}></Route>
</Routes>
    </div>
  );
}
export default App;
