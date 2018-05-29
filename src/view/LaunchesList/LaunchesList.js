import React, { Component } from "react"
import { format } from "date-fns"

import logo from "../../assets/img/space_x_logo_bw_centered.png"
import arrow from '../../assets/img/arrow_pointer.png'

import FilterButtons from "../../components/FilterButtons/FilterButtons"
import Loading from "../../components/UI/Loading/Loading"

import "./LaunchesList.sass"

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
        <div className="launches-list__top">
          <img className="launches-list__logo" src={logo} alt="SpaceX logo" />
          <p className="launches-list__text">Launches 2018</p>
          {allLaunches ? (
            <FilterButtons
              allLaunches={allLaunches}
              onFilterListClick={this.handleFilterListClick}
            />
          ) : (
            <Loading />
          )}
        </div>
        <div>
          {loading ? <Loading /> : null}
          {error ? <div className="launches-list__error">Error</div> : null}
          <div className="launches-list__launches">
            {notFound ? (
              <span className="launches-list__error">Sorry, no launches found</span>
            ) : filteredLaunches ? (
              filteredLaunches.map(launch => {
                return (
                  <div
                    className="launch"
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
                    <span className="launch__date">
                      {format(launch.launch_date_local, "DD MMMM YYYY")}
                    </span>
                    <div className="launch__arrow">
                      <img className="launch__arrow-icon" src={arrow} />
                    </div>
                    <ul className="launch__list">
                      <li className="launch__list-item">
                        <div className="launch__name">Rocket: </div>
                        <div className="launch__data">
                          {launch.rocket.rocket_name}
                        </div>
                      </li>
                      <li className="launch__list-item">
                        <div className="launch__name">Launch Site: </div>
                        <div className="launch__data">
                          {launch.launch_site.site_name_long}
                        </div>
                      </li>
                    </ul>
                  </div>
                )
              })
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default LaunchesList
