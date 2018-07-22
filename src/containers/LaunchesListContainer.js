import React, { Component } from "react";
import { connect } from 'react-redux';

import { loadLaunchesList } from '../store/actions';

import LaunchesList from "../components/LaunchesList/LaunchesList";

class LaunchesListContainer extends Component {

  handleFilterListClick = ({ target: { id } }) => {
    this.props.onLoadLaunchesList(id);
  };

  render() {
    const {
      launchesList,
      isNotFound,
      isLoading,
      isError,
      onGoToDetailsClick
    } = this.props;

    if (isError) {
      return <div>error</div>;
    }

    return (
      <LaunchesList
        launchesList={launchesList}
        isNotFound={isNotFound}
        isLoading={isLoading}
        isError={isError}
        onFilterListBtnClick={this.handleFilterListClick}
        onGoToDetailsClick={onGoToDetailsClick}
      />
    );
  }
}
const mapStateToProps = ({ launchesList: { launchesList, isError, isLoading, isNotFound } }) => ({
  launchesList,
  isError,
  isLoading,
  isNotFound
});

const mapDispatchToProps = dispatch => ({
  onLoadLaunchesList: (id) => dispatch(loadLaunchesList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesListContainer);

