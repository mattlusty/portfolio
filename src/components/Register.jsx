import { withRouter, Link } from "react-router-dom";
import { useState } from "react";

import "../styles/css/Register.css";

function Register(props) {
  var [account, setAccount] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });

  var submit = (e) => {
    // props.history.push("about");
    e.preventDefault();
    const userString = JSON.stringify(account);
    fetch("http://localhost:4000/portfolio/users", { method: "post", body: userString })
      .then((res) => res.json())
      .then((newRecord) => console.log(newRecord))
      .catch((e) => console.log(e));
  };

  var handleChange = (e) => {
    var _account = { ...account };
    _account[e.currentTarget.name] = e.currentTarget.value;
    setAccount(_account);
  };

  return (
    <div className="Register">
      <div className="brand">
        <div className="matt">Matthew</div>
        <div className="lusty">Lusty</div>
      </div>
      <div className="register">
        <div className="header">Create an Account</div>
        <div className="login">
          Already signed up? <Link to="/login">Login</Link>
        </div>
        <form onSubmit={submit}>
          <div className="names">
            <div className="field firstName">
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" onChange={handleChange} id="firstName"></input>
            </div>
            <div className="field lastName">
              <label htmlFor="lastName">Last Name</label>
              <input name="lastName" onChange={handleChange} id="lastName"></input>
            </div>
          </div>
          <div className="field email">
            <label htmlFor="email">Email</label>
            <input name="email" onChange={handleChange} id="email"></input>
          </div>
          <div className="field username">
            <label htmlFor="username">Username</label>
            <input name="username" onChange={handleChange} value={account.username} id="username"></input>
          </div>
          <div className="field password">
            <label htmlFor="password">Password</label>
            <input name="password" onChange={handleChange} value={account.password} id="password"></input>
          </div>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
