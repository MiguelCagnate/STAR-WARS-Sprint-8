import React from "react";
import { NavLink } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <div>
      <nav>      
      <NavLink style={{marginLeft:"2%", paddingTop: "2%", color:"aliceblue"}} to="/Home">Home</NavLink>      
      <NavLink style={{marginLeft:"2%", paddingTop: "2%", color:"aliceblue"}} to="/StarshipsRender">Starships</NavLink>   
      </nav>
    </div>
  );
};

