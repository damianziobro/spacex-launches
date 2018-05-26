import { hot } from "react-hot-loader";
import * as React from "react";

import LaunchDetails from "./view/LaunchDetails/LaunchDetails";
import LaunchesList from "./view/LaunchesList/LaunchesList";
import Footer from "./components/Footer/Footer";

import "./styles/theme.sass";

class App extends React.Component {
  state = {
    activeView: "list",
    launchDetailsId: null
  };

  handleGoToDetailsClick = (event) => {
    this.setState({ activeView: "details", launchDetailsId: event.currentTarget.id });
  }

  handleGoToListClick = () => {
    this.setState({ activeView: "list" });
  }

  getActiveView = () => {
    const { activeView, launchDetailsId } = this.state;

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
            id={launchDetailsId}
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
