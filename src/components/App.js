import React, { Component } from 'react';
import NavigationMenu from "./navigation-menu/navigation-menu";
import Subject from "./subject/subject";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <NavigationMenu/>
        <Subject/>
      </div>
    );
  }
}

export default App;
