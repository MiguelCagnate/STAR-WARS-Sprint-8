import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import { HomePage } from "./HomePage";
import { FullDataShips } from "./FullDataShips";
import { StarshipsRender } from "./Starships";
import { Login } from "./Login";
import { Registered } from "./Registered";

import logo from "./img/sw_logo.png";
import "./App.css";

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

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/StarshipsRender" element={<StarshipsRender />} />
          <Route path="/StarshipsRender/:id" element={<FullDataShips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registered />} />
        </Routes>
      </div>
      <form>
        <Link to={"/login"} className="link">
          LOGIN{" "}
        </Link>
        <Link to={"/signup"} className="link">
          SIGN UP
        </Link>
        <p className="ParagraphLogin">Already Registered / Login in?</p>
      </form>
    </BrowserRouter>
  );
}
