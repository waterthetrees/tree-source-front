import React from 'react';
import logo from './logo.svg';
import './App.css';
import TreeSourceTable from './Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TreeSourceTable />
    </div>
  );
}

export default App;
