import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavigationMenu extends Component {
  render() {
    return (
      <div className="navigation-menu">
        <span className={"title"}>Camden Brown</span>
        <div className={"nav-menu-items"}>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/about'}>About Me</Link>
        </div>
      </div>
    );
  };
}

export default NavigationMenu;