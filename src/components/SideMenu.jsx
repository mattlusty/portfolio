import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
// components
import ItemName from "./ItemName";

class SideMenu extends Component {
  render() {
    let hidden = this.props.hidden ? "hidden" : "";
    return (
      <div className={`SideMenu ${hidden}`}>
        <div className="sideMenu">
          <div className="header">
            <div className="inner">Menu</div>
          </div>
          <div className="items">
            <ItemName name="home" label="About" />
            <ItemName name="leaf" label="Portfolio" />
            <ItemName name="leaf" label="Contact" />
            <ItemName name="leaf" label="CV" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
