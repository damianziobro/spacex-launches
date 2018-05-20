import React, { Component } from 'react';

class LaunchCountdown extends Component {

  state = {
    counter: 0,
    intervalId: null
  };

  counterStart = () => {
    let intervalId = setInterval(event => this.setState({ counter: this.state.counter - 1000}), 1000);
    this.setState({ intervalId });
  }

  counterStop = () => {
    const { counter, intervalId } = this.state;
    if (counter <= 0) clearInterval(intervalId);
  }

  componentDidMount() {
      const milisecondsToStart = this.props.time - new Date();
      const { counter } = this.state;
      if (milisecondsToStart > 0) {
          this.setState({counter : milisecondsToStart});
          this.counterStart();
      } else {
          this.counterStop();
      }
  }

  componentWillUnmount() {
    const { intervalId } = this.state;  
    clearInterval(intervalId);
  }

  render() {
    const { counter } = this.state;
    let ms = counter;

    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60);
    s = s % 60;
    let h = Math.floor(m / 60);
    m = m % 60;
    let d = Math.floor(h / 24);
    h = h % 24;

    let days = d;
    let hours = h < 10 ? `0${h}` : h;
    let minutes = m < 10 ? `0${m}` : m;

    this.counterStop();

    return counter ? <span> {`${days} days ${hours} hrs ${minutes} mins to start`}</span> : null
  }
}

export default LaunchCountdown;