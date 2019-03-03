import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weathers/views/index';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather></Weather>
      </div>
    );
  }
}

export default App;
