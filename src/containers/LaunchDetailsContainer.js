import React, { Component } from "react";

import Loading from "../components/UI/Loading/Loading";
import LaunchDetails from "../components/LaunchDetails/LaunchDetails";

import { baseURL } from "../utils.js";

class LaunchDetailsContainer extends Component {
  state = {
    launchData: null,
    rocketData: null,
    launchpadData: null,
    loading: false,
    error: false,
  };

  extractRocketData = rocket => {
    return [
      { label: "Name", data: rocket.name },
      { label: "Company", data: rocket.company },
      {
        label: "Height",
        data: `${rocket.height.meters}M / ${rocket.height.feet}FT`,
      },
      {
        label: "Diameter",
        data: `${rocket.diameter.meters}M / ${rocket.diameter.feet}FT`,
      },
      { label: "Mass", data: `${rocket.mass.kg}KG / ${rocket.mass.lb}LB` },
      { label: "First flight", data: rocket.first_flight },
      { label: "Country", data: rocket.country },
      { label: "Success rate", data: `${rocket.success_rate_pct}%` },
      { label: "Cost per launch", data: `$${rocket.cost_per_launch}` },
    ];
  };

  extractLaunchpadData = launchpad => {
    return [
      { label: "Name", data: launchpad.full_name },
      { label: "Location", data: launchpad.location.name },
    ];
  };

  componentDidMount() {
    const { flightnumber, rocket, launchpad } = this.props;

    Promise.all([
      fetch(`${baseURL}/launches/all?flight_number=${flightnumber}`),
      fetch(`${baseURL}/rockets/${rocket}`),
      fetch(`${baseURL}/launchpads/${launchpad}`),
    ])
      .then(responses =>
        Promise.all(responses.map(response => response.json()))
      )
      .then(data => {
        this.setState({
          launchData: data[0],
          rocketData: data[1],
          launchpadData: data[2],
          loading: false,
          error: false,
        });
      })
      .catch(error =>
        this.setState({
          error: true,
          loading: false,
        })
      );
    this.setState({
      loading: true,
    });
  }

  render() {
    const { launchData, rocketData, launchpadData } = this.state;
    const { onGoToListClick } = this.props;

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

export default LaunchDetailsContainer;
