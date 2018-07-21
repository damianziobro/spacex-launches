import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import LaunchDetailsContainer from "./containers/LaunchDetailsContainer";
import LaunchesListContainer from "./containers/LaunchesListContainer";

import "./styles/theme.sass";

class App extends Component {
  state = {
    flightNumber: null,
    rocket: null,
    launchpad: null,
  };

  handleGoToDetailsClick = (event, flightnumber, rocket, launchpad) => {
    this.props.history.push('/details');
    this.setState({
      flightNumber: flightnumber,
      rocket,
      launchpad,
    });
  };

  handleGoToListClick = () => {
    this.props.history.push('/');
  };

  render() {
    const { flightNumber, rocket, launchpad } = this.state;
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
              rocket={rocket}
              launchpad={launchpad}
              onGoToListClick={this.handleGoToListClick}
            />} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
