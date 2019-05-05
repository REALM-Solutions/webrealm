import React, { Component } from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from "react-router-dom";
import HomePage from "./screens/HomePage";
import SignUp from "./screens/SignUp";
import CreateEventPage from './screens/CreateEventPage';
import Profile from './screens/Profile';
import "../src/assets/CSS/sharedStyles.css";
import EventView from "./screens/EventView";
import logo from './assets/images/splash.png';
import MyEvents from './screens/MyEvents';
import SearchResults from './screens/SearchResults';
import LogIn from './screens/LogIn';
import TermsandConditions from './screens/TermsandConditions';
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import { createStore } from './assets/helpers/store';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      query: '',
      results: []
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

  getInfo = () => {
    let eventArray = []
    let apiWParams = 'https://onthequad.herokuapp.com/events?search=' + this.state.query

    fetch(apiWParams, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': 'https://onthequad.herokuapp.com/'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson !== null) {
          Object.values(responseJson).map(function (event) {
            eventArray.push(event)
          })
          this.setState({
            results: eventArray
          })
          console.log(this.state.results)
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }

  handleInputChange = (e) => {
    // if (e.key === 'Enter') {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
          console.log(this.state.query)
        }
      }
    })
    // }

  }
  clearInput() {
    document.getElementById("navBarMenuBtnContainer").reset();
    console.log()
  }


  render() {
    clearAllBodyScrollLocks()
    return (
      <HashRouter>
        <div>
          <ul className="header" >
            <li> <a style={{ padding: '0' }}><img className="headerLogo" src={logo} alt="" /></a> </li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/myEvents">Events</NavLink></li>
            <li>
              <form className="navBarMenuBtnContainer" id="navBarMenuBtnContainer" >
                <input type="text" className="inputSearch" id="inputSearch" placeholder="Search..." ref={input => this.search = input}
                  onKeyDown={this.handleInputChange} />
                <NavLink to="/SearchResults" >
                  <button type="button" style={{ color: 'black', borderRadius: '3px' }} onClick={this.clearInput.bind()}> Search </button>
                </NavLink>
                {/* <button style={{ height: '24px', marginLeft: '6px' }}>Search</button> */}
                <a onClick={this.showMenu} style={{ color: '#ffffff' }}>Menu</a>
                {this.state.showMenu ? (
                  <div
                    className="menu" ref={(element) => { this.dropdownMenu = element; }}>
                    {/* these NavLink styles must be hard coded to function properly */}
                    <NavLink to='/Profile' style={{ color: 'black', display: 'block' }}>Profile</NavLink>
                    {/* not hooked up, needs to be created still, linked to single-event view just for accessing view */}
                    <NavLink to='/createEvent' style={{ color: 'black', display: 'block' }}>Create Event</NavLink>
                    <NavLink to='/LogIn' style={{ color: 'black', display: 'block' }}>Log-In</NavLink>
                  </div>
                ) : (null)
                }
              </form>
            </li>
          </ul>

          <div className="content" >
            <Route exact path="/" component={HomePage} />
            <Route path="/SearchResults" render={(routeProps) => (<SearchResults {...routeProps} results={this.state.results} />)} />
            <Route path="/EventView" component={EventView} />
            <Route path="/Profile" component={Profile} />
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
export default createStore(App);