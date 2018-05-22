import React, { Component } from "react";
import { format } from "date-fns";

import logo from "../../assets/img/space_x_logo_bw_centered.png";
import FilterButtons from "../../components/FilterButtons/FilterButtons";

class LaunchesList extends Component {
  state = {
    allLaunches: null,
  };

  componentDidMount() {
    fetch("https://api.spacexdata.com/v2/launches/all")
      .then(res => res.json())
      .then(data => this.setState({ allLaunches: data }))
      .catch(err => console.error(err));
  }

  render() {
    const { allLaunches } = this.state;
    return (
      <div className="launches-list">
        <img src={logo} alt="SpaceX logo" />
        <p>Launches 2018</p>
        {allLaunches ? (
          <FilterButtons allLaunches={allLaunches} />
        ) : (
          <div>Loading</div>
        )}
        <div>
          {allLaunches ? allLaunches.map(launch => {
            return (
              <div key={launch.flight_number}>
                <span>{format(launch.launch_date_local, "DD MMMM YYYY")}</span>
                {/* implement arrow in css */}
                <span>___________________________________________</span>
                <ul>
                  <li className="">
                    <span className="">
                      Rocket
                    </span>
                    <span className="">
                      {launch.rocket.rocket_name}
                    </span>
                  </li>
                  <li className="">
                    <span className="">
                      Launch Site
                    </span>
                    <span className="launch-data-section__data">
                      {launch.launch_site.site_name_long}
                    </span>
                  </li>
                </ul>
              </div>
            );
          }): null}
        </div>
      </div>
    );
  }
}

export default LaunchesList;
