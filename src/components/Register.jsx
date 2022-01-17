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
        <form>
          <div className="names">
            <div className="field firstName">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName"></input>
            </div>
            <div className="field lastName">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName"></input>
            </div>
          </div>
          <div className="field email">
            <label htmlFor="username">Email</label>
            <input id="username"></input>
          </div>
          <div className="field username">
            <label htmlFor="username">Username</label>
            <input id="username"></input>
          </div>
          <div className="field password">
            <label htmlFor="password">Password</label>
            <input id="password"></input>
          </div>
          <button onClick={submit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Register);
