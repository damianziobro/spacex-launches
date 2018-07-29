import React, { Component } from 'react';

class LaunchCountdown extends Component {
  state = {
    counter: 0,
    intervalId: null,
  };

  componentDidMount() {
    const { time } = this.props;
    const milisecondsToStart = time - new Date();
    if (milisecondsToStart > 0) {
      this.setState({ counter: milisecondsToStart });
      this.counterStart();
    } else {
      this.counterStop();
    }
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  counterStart = () => {
    const { counter } = this.state;
    const intervalId = setInterval(() => this.setState({ counter: counter - 1000 }), 1000);
    this.setState({ intervalId });
  };

  counterStop = () => {
    const { counter, intervalId } = this.state;
    if (counter <= 0) clearInterval(intervalId);
  };

  render() {
    const { counter } = this.state;
    const ms = counter;

    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60);
    s %= 60;
    let h = Math.floor(m / 60);
    m %= 60;
    const d = Math.floor(h / 24);
    h %= 24;

    const days = d;
    const hours = h < 10 ? `0${h}` : h;
    const minutes = m < 10 ? `0${m}` : m;

    this.counterStop();

    return (counter > 0 && (
      <span>
        {`${days} days ${hours} hrs ${minutes} mins to start`}
      </span>
    ));
  }
}

export default LaunchCountdown;
