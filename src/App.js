import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Graph from './components/Graph';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Моделювання програмного забезпечення</h1>
          <h2>Лабораторна робота №6. Варіант №5</h2>
          <h3>Середа Владислав, Михайло Лакович, Олександр Коваленко, Ярослав Яровий</h3>
        </header>
        <div>
          <Info/>
        </div>
      </div>
    );
  }
}

export default App;
