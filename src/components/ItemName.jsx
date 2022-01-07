import React, { Component } from "react";
// Styles
import "../styles/css/ItemName.css";

class ItemName extends Component {
  render() {
    return (
      <div className="ItemName">
        <i className={`icon-${this.props.name}`}></i>
        <span className="itemLabel">{this.props.label}</span>
      </div>
    );
  }
}

export default ItemName;
