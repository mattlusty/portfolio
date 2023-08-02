import React, { Component } from "react";
// Styles
import "../styles/css/ItemName.css";

class ItemName extends Component {
  render() {
    return (
      <div onClick={(e) => this.props.onClick(e, this.props.label)} className="ItemName">
        <i className={`ItemName_i icon-${this.props.name}`}></i>
        <span className="ItemName__label">{this.props.label}</span>
      </div>
    );
  }
}

export default ItemName;
