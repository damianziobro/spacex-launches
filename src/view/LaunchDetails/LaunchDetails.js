import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

import LaunchDataSection from "../../components/LaunchDataSection/LaunchDataSection";
import LaunchCountdown from "../../components/LaunchCountdown/LaunchCountdown";

import logo from "../../assets/img/space_x_logo_bw_centered.png";
import rocket from "../../assets/sample_json_data/rocket.json";
import launchSite from "../../assets/sample_json_data/launch_site.json";
import launch from "../../assets/sample_json_data/launch.json";

import "./LaunchDetails.sass";

class LaunchDetails extends React.Component {
  static propTypes = {};

  state = {
    launch: null,
    loading: false,
    error: false
  };

  rocketDataItems = [
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

  launchpadDataItems = [
    { label: "Name", data: launchSite.full_name },
    { label: "Location", data: launchSite.location.name },
  ];

  componentDidMount() {
    fetch(`https://api.spacexdata.com/v2/launches?flight_number=${this.props.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          launch: data,
          loading: false,
          error: false
        });
      })
      .catch(err => this.setState({ error: true, loading: false }));
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="launch-details">
        <header className="launch-details__header">
          <img className="launch-details__logo" src={logo} alt="SpaceX logo" />
        </header>
        <section className="launch-details__main">
          <div className="launch-details__columns">
            <div className="launch-details__first-column">
              <span className="launch-details__start-date">
                {format(launch.launch_date_local, "DD MMMM YYYY")}
              </span>
              <h2 className="launch-details__rocket-name">
                {`${launch.rocket.rocket_name} launch`}
              </h2>
              <span className="launch-details__countdown">
                {/* second countdown only for testing */}
                <LaunchCountdown time={new Date(launch.launch_date_utc)} />
                <LaunchCountdown time={new Date("2018-05-25T20:14:00Z")} />
              </span>
              <img
                className="launch-details__mission-patch"
                src={launch.links.mission_patch_small}
                alt="Mission patch"
              />
            </div>
            <div className="launch-details__second-column">
              <LaunchDataSection
                heading="Details"
                description={launch.details}
              />
              <LaunchDataSection
                heading="Rocket"
                items={this.rocketDataItems}
                description={rocket.description}
              />
              <LaunchDataSection
                heading="Launch Pad"
                items={this.launchpadDataItems}
                description={launchSite.details}
              />
            </div>
          </div>
          <section className="mission-links">
            <h2 className="mission-links__heading">Mission links</h2>
            <ul className="mission-links__list">
              <li className="mission-links__list-item">
                <a
                  className="mission-links__link"
                  href={launch.links.reddit_campaign}
                  target="_blank"
                >
                  Reddit campaign
                </a>
              </li>
              <li className="mission-links__list-item">
                <a
                  className="mission-links__link"
                  href={launch.links.presskit}
                  target="_blank"
                >
                  Presskit
                </a>
              </li>
              <li className="mission-links__list-item">
                <a
                  className="mission-links__link"
                  href={launch.links.video_link}
                  target="_blank"
                >
                  Mission video
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default LaunchDetails;
