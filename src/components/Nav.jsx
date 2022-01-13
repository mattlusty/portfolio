import React, { Component } from "react";
// style
import "../styles/css/Nav.css";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  navSelect = (e) => {
    this.props.history.push(e.target.innerHTML);
  };

  render() {
    return (
      <div className="Nav">
        <div className="title">Matthew Lusty</div>
        <div className="middle"></div>
        <div className="menu">
          <ul>
            <li onClick={this.navSelect}>About</li>
            <li onClick={this.navSelect}>Portfolio</li>
            <li onClick={this.navSelect}>Contact</li>
            <li onClick={this.navSelect}>CV</li>
            <li className="profile">X</li>
          </ul>
        </div>
        <div className="mobileMenuToggle" onClick={this.props.toggleMenu}>
          <i className="icon-times"></i>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
