import { withRouter, Link } from "react-router-dom";

import "../styles/css/Login.css";

function Login(props) {
  var login = () => {
    props.history.push("about");
  };

  return (
    <div className="Login">
      <div className="login">
        <div className="header">
          <div className="matt">Matthew</div>
          <div className="lusty">Lusty</div>
        </div>
        <div className="register">
          Need an account? <Link to="/register">Register</Link>
        </div>
        <form className="loginForm">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input id="username"></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input id="password"></input>
          </div>
          <button onClick={login}>Login</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
