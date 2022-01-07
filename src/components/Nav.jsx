import React, { Component } from "react";
// style
import "../styles/css/Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="title">Matthew Lusty</div>
        <div className="middle"></div>
        <div className="menu">
          <ul>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>CV</li>
          </ul>
        </div>
        <div className="mobileMenuToggle" onClick={this.props.toggleMenu}>
          <i className="icon-times"></i>
        </div>
      </div>
    );
  }
}

export default Nav;
