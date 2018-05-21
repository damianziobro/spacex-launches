import { hot } from "react-hot-loader";
import * as React from "react";

import LaunchDetails from "./view/LaunchDetails/LaunchDetails";
import LaunchesList from "./view/LaunchesList/LaunchesList";
import Footer from "./components/Footer/Footer";

import "./styles/theme.sass";

import launch from "./assets/sample_json_data/launch.json";
import launchSite from "./assets/sample_json_data/launch_site.json";
import rocket from "./assets/sample_json_data/rocket.json";

class App extends React.Component {
  state = {
    activeView: "list",
    launchDetailsId: null
  };

  handleGoToDetailsClick = (event) => {
    this.setState({ activeView: "details", launchDetailsId: event.target.id });
  }

  handleGoToListClick = () => {
    this.setState({ activeView: "list" });
  }

  getActiveView = () => {
    const { activeView } = this.state;

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
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onGoToListClick={this.handleGoToListBackClick}
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
