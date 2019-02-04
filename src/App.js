import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './components/nav/NavBar';
import NavBar from './components/nav/NavBar';




class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <header className="App-header">



        </header>
      </div>
    );
  }
}

export default App;
