import { hot } from "react-hot-loader";
import * as React from "react";

import LaunchDetails from "./view/LaunchDetails/LaunchDetails";
import LaunchesList from "./view/LaunchesList/LaunchesList";
import Footer from "./components/Footer/Footer";

import "./styles/theme.sass";

class App extends React.Component {
  state = {
    activeView: "list",
    flightNumber: null,
    rocket: null,
    launchpad: null
  };

  handleGoToDetailsClick = (event, flightnumber, rocket, launchpad) => {
    this.setState({
      activeView: "details",
      flightNumber: flightnumber,
      rocket,
      launchpad
    });
  }

  handleGoToListClick = () => {
    this.setState({ activeView: "list" });
  }

  getActiveView = () => {
    const { activeView, flightNumber, rocket, launchpad } = this.state;

    switch (activeView) {
      case "list":
        return (
          <LaunchesList
            onGoToDetailsClick={this.handleGoToDetailsClick}
          />
        );

      case "details":
        return (
          <LaunchDetails
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
      <div>
        <main>{this.getActiveView()}</main>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
