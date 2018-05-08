import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDetails.sass';

import Header from '../../components/Header/Header';
import RocketData from '../../components/RocketData/RocketData';
import Footer from '../../components/Footer/Footer';

class LaunchDetails extends React.Component {
  static propTypes = {

  };

  state = {
  };

  render() {
    return (
      <div>
        <Header />
        <RocketData 
        launch={this.props.launch}
        launchSite={this.props.launchSite}
        rocket={this.props.rocket}
        />
        <Footer />
      </div>
    );
  };
};

export default LaunchDetails;
