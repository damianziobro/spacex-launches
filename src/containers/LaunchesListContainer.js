import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadLaunchesList } from '../store/actions';

import LaunchesList from '../components/LaunchesList/LaunchesList';

class LaunchesListContainer extends Component {
  state = {
    currentlyActiveList: null,
  };

  handleFilterListClick = ({ target: { id } }) => {
    const { onLoadLaunchesList } = this.props;
    onLoadLaunchesList(id);
    this.setState({ currentlyActiveList: id });
  };

  render() {
    const {
      launchesList,
      isNotFound,
      isLoading,
      isError,
      onGoToDetailsClick,
    } = this.props;

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
const mapStateToProps = ({
  launchesList: {
    launchesList,
    isLoading,
    isNotFound,
  },
}) => ({
  launchesList,
  isLoading,
  isNotFound,
});

const mapDispatchToProps = dispatch => ({
  onLoadLaunchesList: id => dispatch(loadLaunchesList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesListContainer);
