import { withRouter } from "react-router-dom";
import { useState } from "react";
//
import "../styles/css/ProfileMenu.css";
// components
import ItemName from "./ItemName";

function ProfileMenu(props) {
  var [hidden, setHidden] = useState(true);
  var [loggedIn, setLoggedIn] = useState(true);
  var [user] = useState("mattlusty");

  return (
    <div className={`ProfileMenu ${hidden}`}>
      <div className="profileMenu">
        <div className="items">
          <ItemName name="home" label="Account" />
          <ItemName name="leaf" label="Settings" />
          <ItemName name="home" label="Log out" />
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProfileMenu);
