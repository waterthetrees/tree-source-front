import React from 'react';
import logo from './logo.svg';
import './App.css';
import TreeSource from './TreeSource';
import { RunSource } from './RunSource';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RunSource />
      <TreeSource />
    </div>
  );
}

export default App;
