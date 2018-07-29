import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadLaunchDetails } from '../store/actions';

import Loading from '../components/UI/Loading/Loading';
import LaunchDetails from '../components/LaunchDetails/LaunchDetails';

class LaunchDetailsContainer extends Component {
  componentDidMount() {
    const {
      flightNumber, rocketName, launchpadName, onLoadLaunchDetails,
    } = this.props;
    onLoadLaunchDetails(flightNumber, rocketName, launchpadName);
  }

  extractRocketData = rocket => [
    { label: 'Name', data: rocket.name },
    { label: 'Company', data: rocket.company },
    {
      label: 'Height',
      data: `${rocket.height.meters}M / ${rocket.height.feet}FT`,
    },
    {
      label: 'Diameter',
      data: `${rocket.diameter.meters}M / ${rocket.diameter.feet}FT`,
    },
    { label: 'Mass', data: `${rocket.mass.kg}KG / ${rocket.mass.lb}LB` },
    { label: 'First flight', data: rocket.first_flight },
    { label: 'Country', data: rocket.country },
    { label: 'Success rate', data: `${rocket.success_rate_pct}%` },
    { label: 'Cost per launch', data: `$${rocket.cost_per_launch}` },
  ];

  extractLaunchpadData = launchpad => [
    { label: 'Name', data: launchpad.full_name },
    { label: 'Location', data: launchpad.location.name },
  ];

  render() {
    const {
      launchData, rocketData, launchpadData, onGoToListClick,
    } = this.props;

    if (launchData && rocketData && launchpadData) {
      return (
        <LaunchDetails
          launchData={launchData}
          rocketData={rocketData}
          launchpadData={launchpadData}
          onGoToListClick={onGoToListClick}
          extractRocketData={this.extractRocketData}
          extractLaunchpadData={this.extractLaunchpadData}
        />
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = ({
  launchDetails: {
    launchData, rocketData, launchpadData, isError, isLoading,
  }, app: { flightNumber, rocketName, launchpadName },
}) => ({
  launchData,
  rocketData,
  launchpadData,
  isError,
  isLoading,
  flightNumber,
  rocketName,
  launchpadName,
});

const mapDispatchToProps = dispatch => ({
  onLoadLaunchDetails: (flightnumber, rocket, launchpad) => dispatch(loadLaunchDetails(flightnumber, rocket, launchpad)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchDetailsContainer);
