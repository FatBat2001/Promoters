import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

const Login = () => {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const verifyToken = "promotersIntl";   
  const handleLogin = () => {
    axios
      .post("https://api-promoters-intl.onrender.com/admin-login", {
        username: UserName,
        password: Password,
      })
      .then((result) => {
        if (result.data.token === verifyToken) {
            Cookies.set('auth', result.data.token   ); // remember to unset the cookie          
            console.log(Cookies.get('auth')); 
            navigate('/admin-dashboard');    
                
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };
  return (
    <div className="login-form">
      <label htmlFor="username">username</label>
      <input
        id="username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      ></input>
      <label htmlFor="password">password</label>
      <input
        id="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>login</button>
    </div>
  );
};

export default Login;
