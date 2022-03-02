import { withRouter } from "react-router-dom";
import { useState } from "react";

import "../styles/css/ProfileMenu.css";

function ProfileMenu(props) {
  let [closed, setClosed] = useState(true);

  var logout = () => {
    localStorage.clear();
    props.history.push("login");
  };

  let toggleClose = () => {
    console.log("TOGG");
    setClosed(!closed);
  };

  let handleBlur = () => {
    setClosed(true);
  };

  return (
    <div className="ProfileMenu" tabIndex="1" onBlur={handleBlur}>
      <div className="item" onClick={toggleClose}>
        P
      </div>
      <div className={`profileMenu ${closed ? "closed" : ""}`}>
        {props.user ? (
          <>
            <div className="header">
              <div className="icon">P</div>
              <div className="user">{props.user}</div>
            </div>
            <ul className="items">
              <li name="home" label="Account">
                <div>Account</div>
              </li>
              <li name="leaf" label="Settings">
                <div>Settings</div>
              </li>
              <li className="logout" onClick={logout} name="logout" label="logout">
                <div>Log out</div>
              </li>
            </ul>
          </>
        ) : (
          <ul className="items">
            <li className="login" name="leaf" label="Settings" onClick={logout}>
              <div>Login</div>
            </li>

            <li name="leaf" label="Settings">
              <div>Settings</div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default withRouter(ProfileMenu);
