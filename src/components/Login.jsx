import "../styles/css/Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="login">
        <div className="header">
          <div className="matt">Matthew</div>
          <div className="lusty">Lusty</div>
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
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
