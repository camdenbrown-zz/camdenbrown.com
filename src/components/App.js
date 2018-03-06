import React, { Component } from 'react';
import NavigationMenu from "./navigation-menu";
import Blog from "./blog";
import AboutMe from "./about-me";
import { Route} from "react-router-dom";
import Footer from "./footer";


class App extends Component {
  render() {
    return (
      <div className={"app-container"}>
        <NavigationMenu/>
        <Route path={'/blog'} component={Blog}/>
        <Route path={'/about'} component={AboutMe}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
