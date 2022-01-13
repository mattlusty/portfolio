import { withRouter } from "react-router-dom";
import { useState } from "react";
//
import "../styles/css/ProfileMenu.css";
// components
import ItemName from "./ItemName";

function ProfileMenu(props) {
  // var [hidden, setHidden] = useState(false);
  var [loggedIn, setLoggedIn] = useState(true);
  var [user] = useState("mattlusty");

  console.log(props.closed);

  return (
    <div className={`ProfileMenu ${props.hidden ? "hidden" : ""}`}>
      <div className="item" onClick={props.toggleProfileMenu}>
        P
      </div>
      <div className={`profileMenu ${props.closed ? "hidden" : ""}`}>
        <div className="header">
          <div className="icon">D</div>
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
