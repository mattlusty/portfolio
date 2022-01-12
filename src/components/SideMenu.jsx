import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//
import "../styles/css/SideMenu.css";
// components
import ItemName from "./ItemName";

class SideMenu extends Component {
  navSelect = (e, label) => {
    console.log(e);
    console.log(label);
    this.props.history.push(label);
    this.props.toggleMenu();
  };
  render() {
    let hidden = this.props.hidden ? "hidden" : "";
    return (
      <div className={`SideMenu ${hidden}`}>
        <div className="sideMenu">
          <div className="header">
            <div className="inner">Menu</div>
          </div>
          <div className="items">
            <ItemName onClick={this.navSelect} name="home" label="About" />
            <ItemName onClick={this.navSelect} name="leaf" label="Portfolio" />
            <ItemName onClick={this.navSelect} name="leaf" label="Contact" />
            <ItemName onClick={this.navSelect} name="leaf" label="CV" />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SideMenu);
