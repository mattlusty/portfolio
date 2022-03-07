import { withRouter } from "react-router-dom";
import { useState } from "react";

import "../styles/css/ProfileMenu.css";

function ProfileMenu(props) {
  let [closed, setClosed] = useState(true);

  var loginPage = () => {
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
      <div className="ProfileMenu__button" onClick={toggleClose}>
        P
      </div>
      <div className={`ProfileMenu__profileMenu ${closed ? "ProfileMenu__profileMenu--closed" : ""}`}>
        {props.user ? (
          <>
            <div className="ProfileMenu__header">
              <div className="ProfileMenu__icon">P</div>
              <div className="ProfileMenu__user">{props.user}</div>
            </div>
            <ul className="ProfileMenu__items">
              <li className="ProfileMenu__li" name="home" label="Account">
                <div>Account</div>
              </li>
              <li className="ProfileMenu__li" name="leaf" label="Settings">
                <div>Settings</div>
              </li>
              <li className="ProfileMenu__li ProfileMenu__li--logout" onClick={loginPage} name="logout" label="logout">
                <div>Log out</div>
              </li>
            </ul>
          </>
        ) : (
          <ul className="ProfileMenu__items">
            <li className="ProfileMenu__li" name="leaf" label="login" onClick={loginPage}>
              <div>Login</div>
            </li>

            <li className="ProfileMenu__li" name="leaf" label="Settings">
              <div>Settings</div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default withRouter(ProfileMenu);
