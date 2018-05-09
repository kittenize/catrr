import React, { Component } from 'react';
import './App.css';
import TimelineContainer from './components/TimelineContainer';
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Catrr</h1>
        </header>
        <Grid>
          <TimelineContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
