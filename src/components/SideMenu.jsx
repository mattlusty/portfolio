import React, { Component } from "react";
//
import "../styles/css/SideMenu.css";
// components
import ItemName from "./ItemName";

class SideMenu extends Component {
  render() {
    // let { hidden, fullClose } = this.props.sideMenu;
    return (
      <div className="SideMenu">
        <div className="sideMenu">
          <div className="header">
            <div className="inner">Menu</div>
          </div>
          <div className="items">
            <ItemName label="About" />
            <ItemName label="Portfolio" />
            <ItemName label="Contact" />
            <ItemName label="CV" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
