import React from "react";
import PropTypes from "prop-types";

import LaunchDataSection from '../../components/LaunchDataSection/LaunchDataSection';

import logo from '../../assets/img/space_x_logo_bw_centered.png';
import rocket from '../../assets/sample_json_data/rocket.json';
import launchSite from '../../assets/sample_json_data/launch_site.json';
import launch from '../../assets/sample_json_data/launch.json';

import "./LaunchDetails.sass";

class LaunchDetails extends React.Component {
  static propTypes = {};

  state = {};

  rocketDataItems = [
    { label: 'Name', data: rocket.name },
    { label: 'Company', data: rocket.company },
    { label: 'Height', data: `${rocket.height.meters}M / ${rocket.height.feet}FT` },
    { label: 'Diameter', data: `${rocket.diameter.meters}M / ${rocket.diameter.feet}FT` },
    { label: 'Mass', data: `${rocket.mass.kg}KG / ${rocket.mass.lb}LB` },
    { label: 'First flight', data: rocket.first_flight },
    { label: 'Country', data: rocket.country },
    { label: 'Success rate', data: `${rocket.success_rate_pct}%` },
    { label: 'Cost per launch', data: `$${rocket.cost_per_launch}` },
  ];

  launchpadDataItems = [
    { label: 'Name', data: launchSite.full_name },
    { label: 'Location', data: launchSite.location.name },
  ];

  render() {
    return (
      <div>
        <header className="launch-details__header">
          <img className="launch-details__logo" src={logo} alt="SpaceX logo" />
        </header>
        <section className="launch-details__main">
          <div className="launch-details__first-column">
            <span className="launch-details__start_date">
              {launch.launch_date_local}
            </span>
            <h2 className="launch-details__rocket-name">
              {launch.rocket.rocket_name}
            </h2>
            <span className="launch-details__countdown" />
            <img
              className="launch-details__mission-patch"
              src={launch.links.mission_patch_small}
              alt="Mission patch"
            />
          </div>
          <div className="launch-details__second-section">
            <LaunchDataSection heading="Details" description={launch.details} />
            <LaunchDataSection heading="Rocket" items={this.rocketDataItems} description={rocket.description} />
            <LaunchDataSection heading="Launch Pad" items={this.launchpadDataItems} description={launchSite.details} />
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
