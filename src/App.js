import React from "react";
import "./App.css";
import logo from "./img/sw_logo.png";
import StarshipsRender from "./Starships";
import { FullDataCard } from "./FullDataCard";
import { Home } from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Routes,Route, Link } from "react-router-dom";




export function App() {


  return (    
<BrowserRouter>
    <div>
       

       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="FullCardData" element={<FullDataCard/>}></Route>
       </Routes>
        
    
    
    
    
    <button className="LogiSignUpStyle">LOGIN</button>
        <button className="LogiSignUpStyle">SIGN UP</button>
      <div>
        
      </div>
      <img src={logo} alt="star wars white logo" className="LogoStyle" />
      <hr></hr>
      <a href="#" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </a>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Starships
      </a>
      <hr></hr>
      <div>
        <StarshipsRender />
      </div>
    </div>
</BrowserRouter>
      
    
  )
}


