import React from "react";
import "./App.css";
import logo from "./img/sw_logo.png";
import { StarshipsRender } from "./Starships";
import {FullDataShips} from './FullDataShips'
import { Home } from "./Home";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";


export function App() {
  return (
    <BrowserRouter>
      <div>
        <img src={logo} alt="star wars white logo" className="LogoStyle" />
        <Link to="/" className="link">
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
       <Link className="link">LOGIN</Link>
      <Link className="link">SIGN UP</Link>
        <hr></hr>
         <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/StarshipsRender" element={<StarshipsRender />} />        
          <Route path="/StarshipsRender/:id" element={<FullDataShips />} />        
        </Routes>
      </div>
    </BrowserRouter>
  );
}
