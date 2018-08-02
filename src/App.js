import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { storeLaunchQueryData, userTabbing } from './store/actions';

import LaunchDetailsContainer from './containers/LaunchDetailsContainer';
import LaunchesListContainer from './containers/LaunchesListContainer';

import './styles/theme.css';

class App extends Component {
  handleTabKeyClick = ({ key }) => {
    const { onUserTabbing } = this.props;

    if (key === 'Tab') {
      onUserTabbing();
    }
  }

  handleGoToDetailsClick = (event, flightnumber, rocket, launchpad) => {
    const { history, onStoreLaunchQueryData } = this.props;

    history.push('/details');
    onStoreLaunchQueryData(flightnumber, rocket, launchpad);
  };

  handleGoToListClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const {
      flightNumber,
      rocketName,
      launchpadName,
      isUserTabbing,
    } = this.props;
    return (
      <main
        className={isUserTabbing ? 'is-user-tabbing' : null}
        onKeyDown={this.handleTabKeyClick}
      >
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <LaunchesListContainer
                onGoToDetailsClick={this.handleGoToDetailsClick}
              />
            )}
          />
          <Route
            path="/details"
            component={() => (
              <LaunchDetailsContainer
                flightnumber={flightNumber}
                rocket={rocketName}
                launchpad={launchpadName}
                onGoToListClick={this.handleGoToListClick}
              />
            )}
          />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = ({
  app: {
    flightNumber,
    rocketName,
    launchpadName,
    isUserTabbing,
  },
}) => ({
  flightNumber,
  rocketName,
  launchpadName,
  isUserTabbing,
});

const mapDispatchToProps = dispatch => ({
  onStoreLaunchQueryData: (flightnumber, rocket, launchpad) => dispatch(storeLaunchQueryData(flightnumber, rocket, launchpad)),
  onUserTabbing: () => dispatch(userTabbing()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
