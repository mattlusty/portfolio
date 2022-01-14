import React, { Component } from "react";
// style
import "../styles/css/Nav.css";
import { withRouter } from "react-router-dom";
// components
import ProfileMenu from "./ProfileMenu";

class Nav extends Component {
  state = { profileMenu: { closed: true }, active: 0 };

  navSelect = (e) => {
    this.props.history.push(e.target.innerHTML);
    this.setState({ active: e.target.id });
  };

  toggleProfileMenu = () => {
    console.log("helo");
    this.setState({ profileMenu: { ...this.state.profileMenu, closed: !this.state.profileMenu.closed } });
  };

  render() {
    return (
      <div className="Nav">
        <div className="title">Matthew Lusty</div>
        <div className="rightSide">
          <ul className="menu">
            <li id="0" className={this.state.active == 0 ? "active" : ""} onClick={this.navSelect}>
              About
            </li>
            <li id="1" className={this.state.active == 1 ? "active" : ""} onClick={this.navSelect}>
              Portfolio
            </li>
            <li id="2" className={this.state.active == 2 ? "active" : ""} onClick={this.navSelect}>
              Contact
            </li>
            <li id="3" className={this.state.active == 3 ? "active" : ""} onClick={this.navSelect}>
              CV
            </li>
          </ul>
          <ProfileMenu
            // hidden={this.state.profileMenu.hidden}
            closed={this.state.profileMenu.closed}
            toggleProfileMenu={this.toggleProfileMenu}
            user="mattlusty123"
          />
          <div className="mobileMenuToggle" onClick={this.props.toggleSideMenu}>
            <i className="icon-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
