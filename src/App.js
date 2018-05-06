import { hot } from 'react-hot-loader';
import * as React from 'react';

import LaunchDetails from './view/LaunchDetails/LaunchDetails';

import './styles/theme.sass';

import launch from './assets/sample_json_data/launch.json';
import launchSite from './assets/sample_json_data/launch_site.json';
import rocket from './assets/sample_json_data/rocket.json';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <main>
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);
