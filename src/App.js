import { hot } from 'react-hot-loader';
import * as React from 'react';

import Home from './view/Home';
import Counter from './view/Counter';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <main>
        <Home username="DaftCoder" />
        <Counter from={170} to={190} />
      </main>
    );
  }
}

export default hot(module)(App);
