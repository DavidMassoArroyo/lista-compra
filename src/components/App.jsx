import React, { Component } from "react";
import BodyApp from "./Body/BodyApp";
import HeaderApp from "./Header/HeaderApp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
  }

  enableSidebar(sidebarToggle) {
    this.setState({ sidebar: sidebarToggle });
  }

  render() {
    return (
      <React.Fragment>
        <HeaderApp sidebar={this.enableSidebar.bind(this)} />
        <BodyApp sidebarToggle={this.state.sidebar} />
      </React.Fragment>
    );
  }
}

export default App;
