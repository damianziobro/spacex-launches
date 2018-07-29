import React from 'react';
import { format } from 'date-fns';

import LaunchDataSection from '../LaunchDataSection/LaunchDataSection';
import LaunchCountdown from '../LaunchCountdown/LaunchCountdown';
import Footer from '../Footer/Footer';

import logo from '../../assets/img/space_x_logo_bw_centered.png';

import './LaunchDetails.css';

function LaunchDetails({
  launchData,
  rocketData,
  launchpadData,
  onGoToListClick,
  extractRocketData,
  extractLaunchpadData,
}) {
  return (
    <div className="launch-details">
      <header className="launch-details__header">
        <button
          type="button"
          className="launch-details__go-back-btn"
          onClick={onGoToListClick}
        >
          Go back
        </button>
        <img className="launch-details__logo" src={logo} alt="SpaceX logo" />
      </header>
      <section className="launch-details__main">
        <div className="launch-details__columns">
          <div className="launch-details__first-column">
            <span className="launch-details__start-date">
              {format(launchData[0].launch_date_local, 'DD MMMM YYYY')}
            </span>
            <h2 className="launch-details__rocket-name">
              {`${launchData[0].rocket.rocket_name} launch`}
            </h2>
            <span className="launch-details__countdown">
              <LaunchCountdown time={new Date(launchData[0].launch_date_utc)} />
            </span>
            <img
              className="launch-details__mission-patch"
              src={launchData[0].links.mission_patch_small}
              alt="Mission patch"
            />
          </div>
          <div className="launch-details__second-column">
            <LaunchDataSection
              heading="Details"
              description={launchData[0].details}
            />
            <LaunchDataSection
              heading="Rocket"
              items={extractRocketData(rocketData)}
              description={rocketData.description}
            />
            <LaunchDataSection
              heading="Launch Pad"
              items={extractLaunchpadData(launchpadData)}
              description={launchpadData.details}
            />
          </div>
        </div>
        <section className="mission-links">
          <h2 className="mission-links__heading">
            Mission links
          </h2>
          <ul className="mission-links__list">
            <li className="mission-links__list-item">
              <a
                className="mission-links__link"
                href={launchData[0].links.reddit_campaign}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reddit campaign
              </a>
            </li>
            <li className="mission-links__list-item">
              <a
                className="mission-links__link"
                href={launchData[0].links.presskit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Presskit
              </a>
            </li>
            <li className="mission-links__list-item">
              <a
                className="mission-links__link"
                href={launchData[0].links.video_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mission video
              </a>
            </li>
          </ul>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default LaunchDetails;
