import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Blog from "../blog/blog";
import AboutMe from "../about-me/about-me";

class NavigationMenu extends Component {
  render() {
    return (
      <div className="navigation-menu">
        <span className={"title"}>Camden Brown</span>
        <div className={"nav-menu-items"}>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/about'}>About Me</Link>
        </div>

        <Route path={'/blog'} component={Blog}/>
        <Route path={'/about'} component={AboutMe}/>
      </div>
    );
  };
}

export default NavigationMenu;