import React from 'react'
import Nav from '../Components/TopNav/TopNav'
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from '../Pages/Home';
function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    
    </Routes>
  </BrowserRouter>
       
    </div>
  )
}

export default AppRouter