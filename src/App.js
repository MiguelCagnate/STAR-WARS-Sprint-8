import React,{Fragment, useState} from "react";
import "./App.css";
import logo from "./img/sw_logo.png";
import { StarshipsRender } from "./Starships";
import { FullDataShips } from "./FullDataShips";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { Home } from "./Home";





export function App() {

  const [isDetailVisible, toggleDetail] = useState(false);
  return (

  
    <BrowserRouter>
      <div>
      {isDetailVisible ? (



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
          <Link className="link">LOGIN </Link>
          <Link  className="link">
            SIGN UP
          </Link>
          <Link className="link" type="submit">
            Register
          </Link>

          <p className="ParagraphLogin">Already Registered / Login in?</p>
         
        </form>
        <hr></hr>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/StarshipsRender" element={<StarshipsRender />} />
          <Route path="/StarshipsRender/:id" element={<FullDataShips />} />
        </Routes>

        ) : (
        <BackgroundPage>         
          <h1>Benvinguts</h1>
          <h3>Aquesta és la història d'un superheroi galàctic 🦹‍♀️</h3>
          <ButtonStart type="button" onClick={() => toggleDetail(true)}>
            START!▶️
          </ButtonStart>
        </BackgroundPage>
      )}



     

      </div>
    </BrowserRouter>
   
  );
}
