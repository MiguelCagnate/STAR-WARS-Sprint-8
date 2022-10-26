import React from "react";
import { Link } from "react-router-dom";


export const Navigationbar = () => {
  return (
    <div>
      <nav>
      <Link style={{marginLeft:"2%", padding: "2%"}} to="/Home">Home</Link>
      <Link style={{marginLeft:"2%"}} to="/StarshipsRender">Starships</Link>
      </nav>
    </div>
  );
};


