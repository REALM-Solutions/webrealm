import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SignUp from "./screens/SignUp";
import CreateEventPage from './screens/CreateEventPage';
import "../src/assets/CSS/sharedStyles.css";
import EventView from "./screens/EventView";
import logo from './assets/images/splash.png';
import MyEvents from './screens/MyEvents';
import LogIn from './screens/LogIn';
import TermsandConditions from './screens/TermsandConditions';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { createStore } from './assets/helpers/store';



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
    clearAllBodyScrollLocks()
    return (
      <HashRouter>
        <div>
          <ul className="header" >
            <li> <a style={{padding:'0'}}><img className="headerLogo"  src={logo} alt="" /></a> </li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/myEvents">Events</NavLink></li>
            <li><NavLink to="/SignUp">Sign Up</NavLink></li>
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
                  <NavLink to='/LogIn' style={{ color: 'black', display: 'block' }}>Log-In</NavLink>
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
            <Route path="/SignUp" component={SignUp} />
            <Route path='/createEvent' component={CreateEventPage} />
            <Route path='/myEvents' component={MyEvents} />
            <Route exact path="/TermsandConditions" component={TermsandConditions} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default createStore (App);