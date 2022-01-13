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
        <div className="header">
          <div className="icon">P</div>
          <div className="user">mattlusty123</div>
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
      </div>
    </div>
  );
}

export default withRouter(ProfileMenu);
