import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { login } from "../features/userSlice";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email,password, loggedIn:true}))
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <h1> Login here</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
