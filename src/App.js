import React from "react";
import "./App.css";
import logo from "./img/sw_logo.png";
import { StarshipsRender } from "./Starships";
import { Home } from "./Home";
import { Navigationbar } from "./Navigationbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>   
      <div>     
        <button className="LogiSignUpStyle">LOGIN</button>
        <button className="LogiSignUpStyle">SIGN UP</button>
        <img src={logo} alt="star wars white logo" className="LogoStyle" />
        <Navigationbar />

        <hr></hr>       
        
          <button href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Home
          </button>
          <button href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Starships
          </button>
        
        <hr></hr>        
        <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/StarshipsRender" element={<StarshipsRender />} />
      </Routes>
      </div>
     
    </BrowserRouter>
  );
}
