import React from "react";
import { NavLink } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <div>
      <nav>      
      <NavLink style={{marginLeft:"2%", paddingTop: "2%", color:"tomato", fontSize:"19px"}} to="/Home">HOME</NavLink>      
      <NavLink style={{marginLeft:"2%", paddingTop: "2%", color:"tomato", fontSize:"19px"}} to="/StarshipsRender">STARSHIPS</NavLink>   
      </nav>
    </div>
  );
};

