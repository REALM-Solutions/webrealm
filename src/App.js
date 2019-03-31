import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LogIn from "./screens/LogIn";
import CreateEventPage from './screens/CreateEventPage';
import "../src/assets/CSS/sharedStyles.css";
import EventView from "./screens/EventView";
import logo from './assets/images/logo3.png';
import MyEvents from './screens/MyEvents';


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
            <li> <a><img className="headerLogo" src={logo} alt="" /></a> </li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/myEvents">Events</NavLink></li>
            <li><NavLink to="/LogIn">Log-In</NavLink></li>
            <li>  <div className="navBarMenuBtnContainer" >
              <input type="text" className="input" placeholder="Search..." />
              <a onClick={this.showMenu} style={{ color: '#ffffff' }}>Menu</a>
              {this.state.showMenu ? (
                <div
                  className="menu" ref={(element) => { this.dropdownMenu = element; }}>
                  {/* these NavLink styles must be hard coded to function properly */}
                  <NavLink to='/' style={{ color: 'black', display: 'block' }}>Profile</NavLink>
                  {/* not hooked up, needs to be created still, linked to single-event view just for accessing view */}
                  <NavLink to='/createEvent' style={{ color: 'black', display: 'block' }}>Create Event</NavLink>
                </div>
              ) : (null)
              }
            </div>
            </li>
          </ul>

          <div className="content" >
            <Route exact path="/" component={HomePage} />
            <Route path="/EventView" component={EventView} />
            <Route path="/LogIn" component={LogIn} />
            <Route path='/createEvent' component={CreateEventPage} />
            <Route path='/myEvents' component={MyEvents} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;