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
        <Navigationbar />
        <Routes>
          <Route path="/Home" component={Home} />
          <Route path="/StarshipsRender" component={StarshipsRender} />
        </Routes>

     

        <Home />
        <button className="LogiSignUpStyle">LOGIN</button>
        <button className="LogiSignUpStyle">SIGN UP</button>

        <div></div>
        <img src={logo} alt="star wars white logo" className="LogoStyle" />
        <hr></hr>
        <div>
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
        </div>
        <hr></hr>
        <div></div>
      </div>
    </BrowserRouter>
  );
}
