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
        <div className="menu" onClick={this.navSelect}>
          <ul>
            <li>About</li>
            <li>Portfolio</li>
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

export default withRouter(Nav);
