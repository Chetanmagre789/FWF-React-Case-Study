import React, { Component } from 'react';
import './App.css';
import Calculator from './components/calculator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Calculator</h1>
        </header>
        <Calculator/>
      </div>
    );
  }
}

export default App;
