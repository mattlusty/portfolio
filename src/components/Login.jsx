import { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import * as http from "../services/httpService";

import "../styles/css/Login.css";

function Login(props) {
  var [creds, setCreds] = useState({ username: "", password: "" });
  var [fresh, setFresh] = useState({ username: true, password: true });
  var [errors, setErrors] = useState({ username: "", password: "" });

  // local state - to keep track of prevState (between setStates)
  let _creds;
  let _fresh;

  var login = async (e) => {
    e.preventDefault();
    const { username, password } = creds;
    const endPoint = "http://localhost:4000/portfolio/login";
    http
      .post(endPoint, { username, password })
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.token);
        props.loginUser(username);
        props.history.push("about)");
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          let _errors = { ...errors };
          // Fetch - request sent & response receieved - fail status 401
          _errors.username = "incorrect details, please try again";
          _errors.password = "incorrect details, please try again";
          setErrors(_errors);
        } else if (error.request) {
          // Fetch - request sent & response receieved - fail status (other)
        } else {
          // Fetch - request not sent
        }
      });
  };

  var handleChange = (e) => {
    let { name, value } = e.currentTarget;
    _creds = { ...creds };
    _fresh = { ...fresh };
    _creds[name] = value;
    setCreds(_creds);
    validate(name);
  };

  var handleBlur = (e) => {
    let name = e.currentTarget.name;
    _creds = { ...creds };
    _fresh = { ...fresh };
    _fresh[name] = false;
    setFresh(_fresh);
    validate(name);
  };

  const validate = (name) => {
    let _errors = { ...errors };
    _errors[name] = "";
    if (!_fresh[name]) {
      if (!_creds[name]) {
        _errors[name] = "required";
      }
    }
    setErrors(_errors);
  };

  return (
    <div className="Login">
      <div className="Login__brand">
        <div className="Login__matt">Matthew</div>
        <div className="Login__lusty">Lusty</div>
      </div>
      <div className="Login__login">
        <div className="Login__header">Sign In</div>
        <div className="Login__register">
          Need an account? <Link to="/register">Register</Link>
        </div>
        <form className="Login__form" onSubmit={login}>
          <div className={`Login__field--username ${errors.username ? "error" : ""}`}>
            <label className="Login__label" htmlFor="username">
              Username<span>{errors.username}</span>
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              id="username"
              name="username"
              value={creds.username}
            ></input>
          </div>
          <div className={`Login__field--password ${errors.password ? "error" : ""}`}>
            <label className="Login__label" htmlFor="password">
              Password <span>{errors.password}</span>
            </label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              name="password"
              value={creds.password}
            ></input>
          </div>
          <button className="Login__button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
