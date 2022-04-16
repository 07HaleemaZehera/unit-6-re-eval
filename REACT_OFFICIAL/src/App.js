
import './App.css';

import {Router,Route,Routes} from "react-router-dom"
import Home from "./components/Home"



function App() {
  return (
    <div className='App'>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route></Route>
</Routes>
    </div>
  );
}
export default App;
