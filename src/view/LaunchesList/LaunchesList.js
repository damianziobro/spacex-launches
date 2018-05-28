import React, { Component } from "react"
import { format } from "date-fns"

import logo from "../../assets/img/space_x_logo_bw_centered.png"

import FilterButtons from "../../components/FilterButtons/FilterButtons"
import Loading from "../../components/UI/Loading/Loading"

class LaunchesList extends Component {
  state = {
    allLaunches: null,
    filteredLaunches: null,
    loading: false,
    error: false,
    notFound: false,
  }

  handleFilterListClick = event => {
    const { id } = event.target
    const query = id === "allrockets" ? "all" : `?rocket_id=${id}`
    fetch(`https://api.spacexdata.com/v2/launches/${query}`)
      .then(response => response.json())
      .then(data => {
        const notFound = data.length == 0 ? true : false
        this.setState({
          filteredLaunches: data,
          loading: false,
          error: false,
          notFound,
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

  componentDidMount() {
    fetch("https://api.spacexdata.com/v2/launches/all")
      .then(response => response.json())
      .then(data =>
        this.setState({
          allLaunches: data,
          loading: false,
          error: false,
        })
      )
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
    const {
      allLaunches,
      filteredLaunches,
      notFound,
      loading,
      error,
    } = this.state
    return (
      <div className="launches-list">
        <img src={logo} alt="SpaceX logo" />
        <p>Launches 2018</p>
        {allLaunches ? (
          <FilterButtons
            allLaunches={allLaunches}
            onFilterListClick={this.handleFilterListClick}
          />
        ) : (
          <Loading />
        )}
        <div>
          {loading ? <Loading /> : null}
          {error ? <div>Error</div> : null}
          {notFound ? (
            <span>Sorry, no launches found</span>
          ) : filteredLaunches ? (
            filteredLaunches.map(launch => {
              return (
                <div
                  key={launch.flight_number}
                  onClick={event =>
                    this.props.onGoToDetailsClick(
                      event,
                      launch.flight_number,
                      launch.rocket.rocket_name
                        .replace(/\s/g, "")
                        .toLowerCase(),
                      launch.launch_site.site_id
                    )
                  }
                >
                  <span>
                    {format(launch.launch_date_local, "DD MMMM YYYY")}
                  </span>
                  {/* implement arrow in css */}
                  <span>___________________________________________</span>
                  <ul>
                    <li className="">
                      <span className="">Rocket</span>
                      <span className="">{launch.rocket.rocket_name}</span>
                    </li>
                    <li className="">
                      <span className="">Launch Site</span>
                      <span className="launch-data-section__data">
                        {launch.launch_site.site_name_long}
                      </span>
                    </li>
                  </ul>
                </div>
              )
            })
          ) : null}
        </div>
      </div>
    )
  }
}

export default LaunchesList
