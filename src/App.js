import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './views/Home';
import About from './views/About';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
      </div>
    );
  }
}

export default App;
