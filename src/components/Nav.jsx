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
        <div className="Nav__title">Matthew Lusty</div>
        <div className="Nav__rightSide">
          <ul className="Nav__menu">
            <li
              id="0"
              className={`Nav__li ${this.state.active == 0 ? "Nav__li--active" : ""}`}
              onClick={(e) => this.navSelect(e, "about")}
            >
              About
            </li>
            <li
              id="1"
              className={`Nav__li ${this.state.active == 1 ? "Nav__li--active" : ""}`}
              onClick={(e) => this.navSelect(e, "portfolio")}
            >
              Portfolio
            </li>
            <li
              id="2"
              className={`Nav__li ${this.state.active == 2 ? "Nav__li--active" : ""}`}
              onClick={(e) => this.navSelect(e, "contact")}
            >
              Contact
            </li>
            <li
              id="3"
              className={`Nav__li ${this.state.active == 3 ? "Nav__li--active" : ""}`}
              onClick={(e) => this.navSelect(e, "cv")}
            >
              CV
            </li>
          </ul>
          <ProfileMenu
            // hidden={this.state.profileMenu.hidden}
            closed={this.state.profileMenu.closed}
            toggleProfileMenu={this.toggleProfileMenu}
            user={this.props.user}
          />
          <div className="Nav__mobileMenuToggle" onClick={this.props.toggleSideMenu}>
            <i className="icon-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
