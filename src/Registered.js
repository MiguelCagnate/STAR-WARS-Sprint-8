// import React,{useState} from "react";
// import "./App.css";
// import logo from "./img/sw_logo.png";
// import { StarshipsRender } from "./Starships";
// import { FullDataShips } from "./FullDataShips";
// import { Home } from "./Home";
// import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
// import { Login } from "./Login";


// function Registered() {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [phonenumber, setPhonenumber] = useState("");
//   const [login, setLogin] = useState(true);
//   const [flag, setFlag] = useState(false)
// }

// function handleSubmit(e){
//   e.preventDefault();
// if(!email || !name || !password || !phonenumber ) {
//   setFlag(true);
// }else{
//   setFlag(False)
//   localStorage.setItem("Email", JSON.stringify(email));
//   localStorage.setItem("Password", JSON.stringify(password));
// console.log("Save in local Storage");
// setLogin(!Login)

// }
// }
// function handleClick(params) {
//   setLogin(!login)
// }



// export function App() {
//   return (
//     <BrowserRouter>
//       <div>
// {Login ? (

// <>



//         <img src={logo} alt="star wars white logo" className="LogoStyle" />
//         <Link to="/Home" className="link">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Home
//         </Link>
//         <Link to="/StarshipsRender" className="link">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Starships
//         </Link>
      
//         <form onSubmit={handlesubmit}>
//           <Link
//             className="link"
//             onChange={(event) => setLogin(event.target.value)}
//           >
//             LOGIN
//           </Link>
//           <Link
//             className="link"
//             onChange={(event) => setName(event.target.value)}
//           >
//             SIGN UP
//           </Link>
//           <Link className="link" type="submit">
//             Register
//           </Link>

//           <p className="ParagraphLogin" onClick={handleClick}>Already Registered / Login in?</p>

//           {flag &&(
//             <alert>
//               Please fill every field
//             </alert>
//           )}

//         </form>
//         <hr></hr>
//         <Routes>
//           <Route exact path="/Home" element={<Home />} />
//           <Route path="/StarshipsRender" element={<StarshipsRender />} />
//           <Route path="/StarshipsRender/:id" element={<FullDataShips />} />
//         </Routes>
//   ):(
//             <Login/>
//         )}
//       </div>
//     </BrowserRouter>
//   );
// }
