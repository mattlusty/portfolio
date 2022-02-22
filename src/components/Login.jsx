import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import * as http from "../services/httpService";

import "../styles/css/Login.css";

function Login(props) {
  var [creds, setCreds] = useState({ username: "", password: "" });

  var login = async (e) => {
    e.preventDefault();
    const { username, password } = creds;
    const endPoint = "http://localhost:4000/portfolio/login";
    http
      .post(endPoint, { username, password })
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.token);
        console.log(res.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  var handleChange = (e) => {
    var _creds = { ...creds };
    _creds[e.currentTarget.name] = e.currentTarget.value;
    setCreds(_creds);
  };

  return (
    <div className="Login">
      <div className="brand">
        <div className="matt">Matthew</div>
        <div className="lusty">Lusty</div>
      </div>
      <div className="login">
        <div className="header">Sign In</div>
        <div className="register">
          Need an account? <Link to="/register">Register</Link>
        </div>
        <form onSubmit={login}>
          <div className="field username">
            <label htmlFor="username">Username</label>
            <input onChange={handleChange} id="username" name="username" value={creds.username}></input>
          </div>
          <div className="field password">
            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" id="password" name="password" value={creds.password}></input>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
