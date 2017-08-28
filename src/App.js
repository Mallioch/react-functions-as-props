import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorChooser from './ColorChooser.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      value1: 'first',
      value2: 'second'
    }
  }

  handleInputChange(evt, key) {
    const obj = this.state;
    obj[key] = evt.target.value;

    this.setState(obj);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input value={this.state.value1} onChange={(evt) => this.handleInputChange(evt, 'value1')} />
          <input value={this.state.value2} onChange={(evt) => this.handleInputChange(evt, 'value2')} />
        </p>
        <ColorChooser />

      </div>
    );
  }
}

export default App;
