import React, { Component } from 'react';
import NavigationMenu from "./navigation-menu";
import Blog from "./blog";
import { Route } from "react-router-dom";
import Footer from "./footer";
import AboutMe from "./about-me";


class App extends Component {
  render() {
    return (
      <div className={"app-container"}>
        <NavigationMenu/>
        <Footer/>
        <Route exact path={'/'} component={Blog}/>
        <Route path={'/blog'} component={Blog}/>
        <Route path={'/about'} component={AboutMe}/>
      </div>
    );
  }
}

export default App;
