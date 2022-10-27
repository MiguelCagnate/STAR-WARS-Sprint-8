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
        <img src={logo} alt="star wars white logo" className="LogoStyle" />
        
        <Navigationbar />
        
        <hr></hr>
        <p href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home
        </p>
        <p href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Starships          
        </p>
        
       <p> <button className="LogiSignUpStyle">LOGIN</button></p>
        <p><button className="LogiSignUpStyle">SIGN UP</button></p>
        
        
        <hr></hr>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/StarshipsRender" element={<StarshipsRender />} />        
        </Routes>
      </div>
    </BrowserRouter>
  );
}
