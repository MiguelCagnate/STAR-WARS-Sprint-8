import React from "react";
import { NavLink } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <div>
      <nav>      
      <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
      to="/Home">HOME</NavLink>      
      <NavLink style={{marginLeft:"2%", padding: "2%", color:"#00A9FF", fontSize:"19px", textShadow: "2px 2px 5px #0087cc"}} 
      to="/StarshipsRender">STARSHIPS</NavLink>   
      </nav>
    </div>
  );
};

