import { withRouter, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as http from "../services/httpService";

import "../styles/css/Register.css";

function Register(props) {
  var [account, setAccount] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });

  var [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  var [fresh, setFresh] = useState({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    password: true,
  });

  let _account;
  let _fresh;

  var register = (e) => {
    e.preventDefault();
    http
      .post("http://localhost:4000/portfolio/users", account)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        props.loginUser(account.username);
        props.history.push("about");
      })
      .catch((error) => {
        console.log("ERROR:");
        console.error(error.message);
      });
  };

  var handleChange = (e) => {
    let { name, value } = e.currentTarget;
    _account = { ...account };
    _fresh = { ...fresh };
    _account[name] = value;
    setAccount(_account);
    validate(name);
  };

  var handleBlur = (e) => {
    let name = e.currentTarget.name;
    _account = { ...account };
    _fresh = { ...fresh };
    _fresh[name] = false;
    setFresh(_fresh);
    validate(name);
  };

  const validate = (name) => {
    let _errors = { ...errors };
    _errors[name] = "";
    if (_fresh[name] === false) {
      if (!_account[name]) {
        _errors[name] = "required";
      }
    }
    setErrors(_errors);
  };

  return (
    <div className="Register">
      <div className="Register__brand">
        <div className="Register__matt">Matthew</div>
        <div className="Register__lusty">Lusty</div>
      </div>
      <div className="Register__register">
        <div className="Register__header">Create an Account</div>
        <div className="Register__login">
          Already signed up? <Link to="/login">Login</Link>
        </div>
        <form className="Register__form" onSubmit={register}>
          <div className="Register__names">
            <div
              className={`Register__field Register__field--names ${
                !fresh.firstName && errors.firstName ? "error" : ""
              }`}
            >
              <label className="Register__label" className="Register__label" htmlFor="firstName">
                First Name
                {!fresh.firstName ? <span>{errors.firstName}</span> : ""}
              </label>
              <input
                className="Register__input"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                id="firstName"
              ></input>
            </div>
            <div
              className={`Register__field Register__field--names ${!fresh.lastName && errors.lastName ? "error" : ""}`}
            >
              <label className="Register__label" htmlFor="lastName">
                Last Name
                {!fresh.lastName && errors.lastName ? <span>{errors.lastName}</span> : ""}
              </label>
              <input
                className="Register__input"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                id="lastName"
              ></input>
            </div>
          </div>
          <div className={`Register__field Register__field--email ${!fresh.email && errors.email ? "error" : ""}`}>
            <label className="Register__label" htmlFor="email">
              Email
              {!fresh.email && errors.email ? <span>{errors.email}</span> : ""}
            </label>
            <input
              className="Register__input"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
            ></input>
          </div>
          <div
            className={`Register__field Register__field--username ${!fresh.username && errors.username ? "error" : ""}`}
          >
            <label className="Register__label" htmlFor="username">
              Username
              {!fresh.username && errors.username ? <span>{errors.username}</span> : ""}
            </label>
            <input
              className="Register__input"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={account.username}
              id="username"
            ></input>
          </div>
          <div
            className={`Register__field Register__field--password ${!fresh.password && errors.password ? "error" : ""}`}
          >
            <label className="Register__label" htmlFor="password">
              Password
              {!fresh.password && errors.password ? <span>{errors.password}</span> : ""}
            </label>
            <input
              className="Register__input"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={account.password}
              type="password"
              id="password"
            ></input>
          </div>
          <button className="Register__button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
