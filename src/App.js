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

  handleGoToDetailsClick = (event) => {
    const { flightnumber, rocket, launchpad } = event.currentTarget;
    this.setState({
      activeView: "details",
      flightnumber,
      rocket,
      launchpad
    });
  }

  handleGoToListClick = () => {
    this.setState({ activeView: "list" });
  }

  getActiveView = () => {
    const { activeView, flightnumber, rocket, launchpad } = this.state;

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
            flightnumber={flightnumber}
            rocket={rocket}
            launchpad={"vafb_slc_4e"}
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
