import React from "react";
import "./App.css";
import logo from "./img/sw_logo.png";
import { StarshipsRender } from "./Starships";
import { FullDataShips } from "./FullDataShips";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { HomePage } from "./HomePage";

export function App() {
  
  return (
  
    <BrowserRouter>
            <div>
        <img src={logo} alt="star wars white logo" className="LogoStyle" />

        <Link to="/Home" className="link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Home
        </Link>
        <Link to="/StarshipsRender" className="link">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Starships
        </Link>
      
         
        
        <Routes>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/StarshipsRender" element={<StarshipsRender />} />
          <Route path="/StarshipsRender/:id" element={<FullDataShips />} />
        </Routes>  
            </div>
            <form>
          <Link className="link">LOGIN </Link>
          <Link  className="link">SIGN UP</Link>
          <Link className="link" type="submit">Register </Link>
          <p className="ParagraphLogin">Already Registered / Login in?</p>         
           </form>
    </BrowserRouter>
   
  );
}
