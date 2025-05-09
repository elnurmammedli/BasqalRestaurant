import Home from "./Components/home"
import About from "./Components/about"

import { Route, Routes } from "react-router-dom";
function App() {
  

  return (
    <>
    

    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/about" element={<About/>}/>
       




    </Routes>
   
  
    </>
  )
}

export default App
