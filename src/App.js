import { hot } from "react-hot-loader";
import * as React from "react";

import LaunchDetails from "./view/LaunchDetails/LaunchDetails";
import Footer from "./components/Footer/Footer";

import "./styles/theme.sass";

import launch from "./assets/sample_json_data/launch.json";
import launchSite from "./assets/sample_json_data/launch_site.json";
import rocket from "./assets/sample_json_data/rocket.json";

class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);