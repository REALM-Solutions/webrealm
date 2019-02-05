import React from 'react';
import './dropdown.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown button" style={{ width: "200px" }} onClick={this.showDropdownMenu} > User
        {/* <div className="button" onClick={this.showDropdownMenu}> User </div> */}

        {this.state.displayMenu ? (
          <ul>
            <li><a className="active" href="#Create Page">User Info</a></li>
            <li><a href="#DoStuff">My Events</a></li>
            <li><a href="#Setting">Setting</a></li>
            <li><a href="#Log Out">Log Out</a></li>
          </ul>
        ) :
          (
            null
          )
        }

      </div>

    );
  }
}

export default Dropdown;