import React, { Component } from "react";

import LaunchDetailsContainer from "./containers/LaunchDetailsContainer";
import LaunchesListContainer from "./containers/LaunchesListContainer";

import "./styles/theme.sass";

class App extends Component {
  state = {
    activeView: "list",
    flightNumber: null,
    rocket: null,
    launchpad: null,
  };

  handleGoToDetailsClick = (event, flightnumber, rocket, launchpad) => {
    this.setState({
      activeView: "details",
      flightNumber: flightnumber,
      rocket,
      launchpad,
    });
  };

  handleGoToListClick = () => {
    this.setState({ activeView: "list" });
  };

  getActiveView = () => {
    const { activeView, flightNumber, rocket, launchpad } = this.state;

    switch (activeView) {
      case "list":
        return (
          <LaunchesListContainer
            onGoToDetailsClick={this.handleGoToDetailsClick}
          />
        );

      case "details":
        return (
          <LaunchDetailsContainer
            flightnumber={flightNumber}
            rocket={rocket}
            launchpad={launchpad}
            onGoToListClick={this.handleGoToListClick}
          />
        );

      default:
        return null;
    }
  };

  render() {
    return (
      <main>{this.getActiveView()}</main>
    );
  }
}

export default App;
