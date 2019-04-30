import React, { Component } from 'react';
import EventLink from './EventLink';
import { ListGroup } from "react-bootstrap";
import { withStore } from "../assets/helpers/store";


class MyAttendingEventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      events: []
    }
  }
  componentWillMount() {
    let eventArray = []
    let apiWParams = 'https://onthequad.herokuapp.com/events?attending='+this.props.store.loggedInUser.userName
    console.log(apiWParams)
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
            events: eventArray
          })
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }

  render() {
    let eventElements = []
    if (this.state.events === []) {
      eventElements.push(
        <div className = "noEventContatiner" >
          <p className= "noEventMsg" >No Events Found</p>
        </div>
      )
    } else {
      this.state.events.forEach(function (event, index) {
        eventElements.push(
          <EventLink
            key={index}
            name={event.name}
            category={event.category}
            host={event.creator}
            date={event.date}
            startTime={event.startTime}
            endTime={event.endTime}
            location={event.location}
            description={event.description}
            spotsAvailable={event.availableSpots}
          />
        )
      })
    }
    return (
      <ul >
        <div >
          <ListGroup as='ulme'>
            {this.state.events === [] ? <p>No Events Found</p> : eventElements}
          </ListGroup>

        </div>

      </ul>
    )
  }
}

export default withStore (MyAttendingEventsList);