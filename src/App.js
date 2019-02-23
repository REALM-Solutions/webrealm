import React, { Component } from 'react';
import './App.css';
import './components/nav/NavBar';
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./screens/HomePage";
import Contact from "./screens/Contact";
import CreateEventPage from './screens/CreateEventPage';
import "../src/assets/CSS/sharedStyles.css";
import EventView from "./screens/EventView";
import logo from './assets/images/logo3.png';


class App extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });

    }
  }

  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li> <a><img src={logo} alt="" style={{ height: '40px', width: '40px' }} /></a> </li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/EventView">Events</NavLink></li>
            <li><NavLink to="/contact">Log-In</NavLink></li>
            <li><input type="text" className="input" placeholder="Search..." style={{ marginLeft: '45vw' }} /></li>
            <li>  <div style={{ float: 'right', position: 'relative', padding: '10px' }}>
              <a onClick={this.showMenu} style={{ color: '#ffffff' }}>Menu</a>
              {this.state.showMenu ? (
                <div
                  className="menu" style={{ color: 'red' }} ref={(element) => { this.dropdownMenu = element; }}>
                  <a> Profile </a>
                  <a> My Events </a>
                  <NavLink to='/createEvent'>Create Event</NavLink>
                </div>
              ) : (null)
              }
            </div>
            </li>
          </ul>

          <div className="content" style={{ minHeight: '700px' }}>
            <Route exact path="/" component={HomePage} />
            <Route path="/EventView" component={EventView} />
            <Route path="/contact" component={Contact} />
            <Route path='/createEvent' component={CreateEventPage} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;