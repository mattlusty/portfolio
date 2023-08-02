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
    let hidden = this.props.hidden ? "SideMenu--hidden" : "";
    return (
      <div className={`SideMenu ${this.props.hidden ? "SideMenu--hidden" : ""}`}>
        <div className="SideMenu__sideMenu">
          <div className="SideMenu__header">
            <div className="SideMenu__headerInner">Menu</div>
          </div>
          <div className="SideMenu__items">
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
