import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { storeLaunchQueryData } from './store/actions';

import LaunchDetailsContainer from "./containers/LaunchDetailsContainer";
import LaunchesListContainer from "./containers/LaunchesListContainer";

import "./styles/theme.css";

class App extends Component {

  handleGoToDetailsClick = (event, flightnumber, rocket, launchpad) => {
    const { history, onStoreLaunchQueryData } = this.props;

    history.push('/details');
    onStoreLaunchQueryData(flightnumber, rocket, launchpad);
  };

  handleGoToListClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { flightNumber, rocketName, launchpadName } = this.props;
    return (
      <main>
        <Switch>
          <Route exact path='/' component={() =>
            <LaunchesListContainer
              onGoToDetailsClick={this.handleGoToDetailsClick}
            />} />
          <Route path='/details' component={() =>
            <LaunchDetailsContainer
              flightnumber={flightNumber}
              rocket={rocketName}
              launchpad={launchpadName}
              onGoToListClick={this.handleGoToListClick}
            />} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = ({ app: { flightNumber, rocketName, launchpadName } }) => ({
  flightNumber,
  rocketName,
  launchpadName
});

const mapDispatchToProps = dispatch => ({
  onStoreLaunchQueryData: (flightnumber, rocket, launchpad) => dispatch(storeLaunchQueryData(flightnumber, rocket, launchpad)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

