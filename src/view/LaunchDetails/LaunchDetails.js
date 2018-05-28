import React from "react"
import PropTypes from "prop-types"
import { format } from "date-fns"

import LaunchDataSection from "../../components/LaunchDataSection/LaunchDataSection"
import LaunchCountdown from "../../components/LaunchCountdown/LaunchCountdown"
import Loading from "../../components/UI/Loading/Loading"

import logo from "../../assets/img/space_x_logo_bw_centered.png"

import "./LaunchDetails.sass"

class LaunchDetails extends React.Component {
  static propTypes = {}

  state = {
    launchData: null,
    rocketData: null,
    launchpadData: null,
    loading: false,
    error: false,
  }

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
    ]
  }

  extractLaunchpadData = launchpad => {
    return [
      { label: "Name", data: launchpad.full_name },
      { label: "Location", data: launchpad.location.name },
    ]
  }

  componentDidMount() {
    const baseUrl = "https://api.spacexdata.com/v2"
    const { flightnumber, rocket, launchpad } = this.props

    Promise.all([
      fetch(`${baseUrl}/launches/all?flight_number=${flightnumber}`),
      fetch(`${baseUrl}/rockets/${rocket}`),
      fetch(`${baseUrl}/launchpads/${launchpad}`),
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
        })
      })
      .catch(error =>
        this.setState({
          error: true,
          loading: false,
        })
      )
    this.setState({
      loading: true,
    })
  }

  render() {
    const { launchData, rocketData, launchpadData } = this.state
    const { onGoToListClick } = this.props

    if (launchData && rocketData && launchpadData) {
      return (
        <div className="launch-details">
          <header className="launch-details__header">
            <button onClick={onGoToListClick}>Go back</button>
            <img
              className="launch-details__logo"
              src={logo}
              alt="SpaceX logo"
            />
          </header>
          <section className="launch-details__main">
            <div className="launch-details__columns">
              <div className="launch-details__first-column">
                <span className="launch-details__start-date">
                  {format(launchData[0].launch_date_local, "DD MMMM YYYY")}
                </span>
                <h2 className="launch-details__rocket-name">
                  {`${launchData[0].rocket.rocket_name} launch`}
                </h2>
                <span className="launch-details__countdown">
                  <LaunchCountdown
                    time={new Date(launchData[0].launch_date_utc)}
                  />
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
                  items={this.extractRocketData(rocketData)}
                  description={rocketData.description}
                />
                <LaunchDataSection
                  heading="Launch Pad"
                  items={this.extractLaunchpadData(launchpadData)}
                  description={launchpadData.details}
                />
              </div>
            </div>
            <section className="mission-links">
              <h2 className="mission-links__heading">Mission links</h2>
              <ul className="mission-links__list">
                <li className="mission-links__list-item">
                  <a
                    className="mission-links__link"
                    href={launchData[0].links.reddit_campaign}
                    target="_blank"
                  >
                    Reddit campaign
                  </a>
                </li>
                <li className="mission-links__list-item">
                  <a
                    className="mission-links__link"
                    href={launchData[0].links.presskit}
                    target="_blank"
                  >
                    Presskit
                  </a>
                </li>
                <li className="mission-links__list-item">
                  <a
                    className="mission-links__link"
                    href={launchData[0].links.video_link}
                    target="_blank"
                  >
                    Mission video
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </div>
      )
    }
    return <Loading />
  }
}

export default LaunchDetails
