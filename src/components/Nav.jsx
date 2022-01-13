import React, { Component } from "react";
// style
import "../styles/css/Nav.css";
import { withRouter } from "react-router-dom";
// components
import ProfileMenu from "./ProfileMenu";

class Nav extends Component {
  state = { profileMenu: { closed: true } };

  navSelect = (e) => {
    this.props.history.push(e.target.innerHTML);
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
            <li onClick={this.navSelect}>About</li>
            <li onClick={this.navSelect}>Portfolio</li>
            <li onClick={this.navSelect}>Contact</li>
            <li onClick={this.navSelect}>CV</li>
          </ul>
          <ProfileMenu
            // hidden={this.state.profileMenu.hidden}
            closed={this.state.profileMenu.closed}
            toggleProfileMenu={this.toggleProfileMenu}
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
