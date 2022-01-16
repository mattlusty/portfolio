import { withRouter } from "react-router-dom";
import { useState } from "react";
//

import "../styles/css/ProfileMenu.css";

function ProfileMenu(props) {
  return (
    <div className={"ProfileMenu"}>
      <div className="item" onClick={props.toggleProfileMenu}>
        P
      </div>
      <div className={`profileMenu ${props.closed ? "closed" : ""}`}>
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
              <li className="logout" name="logout" label="logout">
                <div>Log out</div>
              </li>
            </ul>
          </>
        ) : (
          <ul className="items">
            <li className="login" name="leaf" label="Settings">
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
