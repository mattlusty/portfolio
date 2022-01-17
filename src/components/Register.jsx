import { withRouter, Link } from "react-router-dom";

import "../styles/css/Register.css";

function Register(props) {
  var submit = () => {
    props.history.push("about");
  };

  return (
    <div className="Register">
      <div className="register">
        <div className="header">Create an Account</div>
        <div className="login">
          Already signed up? <Link to="/login">Login</Link>
        </div>
        <form className="RegisterForm">
          <div className="username">
            <label htmlFor="username">Username</label>
            <input id="username"></input>
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input id="password"></input>
          </div>
          <button onClick={submit}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
