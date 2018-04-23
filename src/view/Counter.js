import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Counter.sass';

class Counter extends Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    onSuccess: PropTypes.func
  }

  state = {
    counter: this.props.from,
    intervalId: null
  };

  counterStart = () => {
    const { from, to } = this.props;

    if (from >= to) return;
    this.state.intervalId = setInterval(event => this.setState({counter: this.state.counter + 1}), 1000);
  }

  counterStop = () => {
    const { to, onSuccess } = this.props;
    const { counter, intervalId } = this.state;

    if (counter >= to) {
        if (onSuccess) onSuccess();
        clearInterval(intervalId);
    }
  }

  counterClickHandler = () => {
    const { from } = this.props;
    const { intervalId } = this.state;

    clearInterval(intervalId);
     this.setState({counter: from});
     this.counterStart();
  }

  componentDidMount() {
      this.counterStart();
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    
    clearInterval(intervalId);
  }

  render() {
    const { counter } = this.state;

    let counterDisplay = <span>00 : 00</span>;
    let seconds = 0;
    let minutes = 0;

    if (counter < 60) {
      seconds = counter;
    } else {
      seconds = Math.floor(counter % 60);
      minutes = Math.floor(counter / 60);
    }

    let timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    
    counterDisplay =  <span>{timerMinutes} : {timerSeconds}</span>;

    this.counterStop();

    return (
      <div className="counter" onClick={this.counterClickHandler}>
        {counterDisplay}
      </div>
    );
  }
}

export default Counter;