import React, { useState } from "react";

export function Registered() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !name || !password || !phonenumber) {
      return alert("All input are required");
    }

    // new user is created
    const user = {name,email,password,phonenumber}

     //Obtain saved users if there aren't, they go to empty array
    const users = JSON.parse(localStorage.getItem('users')) || []
    
    // Add the user
    users.push(user)

    //Update Localstorae
    localStorage.setItem('users', JSON.stringify(users))
   
    console.log("Save in local Storage");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type={"text"}
        name="name"
        placeholder="Full Name"
        onChange={({ target }) => setName(target.value)}
      />
      <input
        type={"email"}
        name="email"
        placeholder="email"
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type={"password"}
        name="password"
        placeholder="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      <input
        type={"tel"}
        name="phone"
        placeholder="Cellphone"
        onChange={({ target }) => setPhonenumber(target.value)}
      />
      <input type="submit" value="Register" />
    </form>
  );
}
