import React, { Component } from "react";

import LaunchesList from "../components/LaunchesList/LaunchesList";

import { baseURL } from "../utils.js";

class LaunchesListContainer extends Component {
  state = {
    allLaunches: null,
    filteredLaunches: null,
    isLoading: false,
    isError: false,
    isNotFound: false,
  };

  handleFilterListClick = event => {
    const { id } = event.target;
    const query = id === "all" ? "all" : `?rocket_id=${id}`;
    fetch(`${baseURL}/launches/${query}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          filteredLaunches: data,
          isLoading: false,
          isError: false,
          isNotFound: data.length == 0 ? true : false,
        });
      })
      .catch(error =>
        this.setState({
          isError: true,
          isLoading: false,
        })
      );
    this.setState({
      isLoading: true,
      isNotFound: false,
      filteredLaunches: null,
    });
  };

  componentDidMount() {
    fetch(`${baseURL}/launches/all`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          allLaunches: data,
          isLoading: false,
          isError: false,
        })
      )
      .catch(error =>
        this.setState({
          isError: true,
          isLoading: false,
        })
      );
    this.setState({
      isLoading: true,
    });
  }

  render() {
    const {
      allLaunches,
      filteredLaunches,
      isNotFound,
      isLoading,
      isError,
    } = this.state;

    const { onGoToDetailsClick } = this.props;

    if (isError) {
      return <div>error</div>;
    }
    return (
      <LaunchesList
        allLaunches={allLaunches}
        filteredLaunches={filteredLaunches}
        isNotFound={isNotFound}
        isLoading={isLoading}
        isError={isError}
        onFilterListBtnClick={this.handleFilterListClick}
        onGoToDetailsClick={this.props.onGoToDetailsClick}
      />
    );
  }
}

export default LaunchesListContainer;
