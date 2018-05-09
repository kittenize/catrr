import React, { Component } from 'react';
import './App.css';

import TimelineContainer from './components/TimelineContainer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Catrr</h1>
        </header>
        <div className='body'>
          <TimelineContainer />
        </div>
      </div>
    );
  }
}

export default App;
