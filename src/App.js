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
<form>

      <Link className="link">LOGIN <input  placeholder="Enter your name"></input></Link>
      <Link className="link">SIGN UP<input  placeholder="Sign up here"></input></Link>
      <Link className="link"  type="submit">Register</Link>

      <p className="ParagraphLogin">Already Registered{" "} / Login in?</p>
</form>

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
