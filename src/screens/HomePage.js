import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryButtonGroup from "../components/CategoryButtonGroup/CategoryButtonGroup";
import EventLink from "../components/EventLink"

class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedCategory: '',
         events: []
      }
   }

   componentWillMount() {
      let eventArray = []
      fetch('http://localhost:8080/events', {
         method: 'GET',
         headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080'
         }
      })
         .then(response => response.json())
         .then(responseJson => {
            console.log(responseJson)
            if (responseJson !== null) {
               Object.values(responseJson).map(function (event) {
                  eventArray.push(event)
               })
               this.setState({
                  events: eventArray
               })
               console.log(responseJson);
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
            <div className="noEventContatiner">
               <p className="noEventMsg">No Events Found</p>
            </div>
         )
      } else {
         this.state.events.forEach(function (event, index) {
            eventElements.push(
               <EventLink
                  key={index}
                  name={event.name}
                  category={event.category}
                  host={event.creator.username}
                  date={event.date}
                  startTime={event.startTime}
                  endTime={event.endTime}
                  location={event.location}
                  description={event.description}
                  spotsAvailable={event.availableSpots}
                  attendees={event.attendees}
               />
            )
         })
         console.log("fetched")
      }
      return (
         <div className="homePageBanner" >
            <h1 className="homePageBannerMsg">Welcome "USER"</h1>
            <img className="eventViewMapStyling" alt="" src={map}  />
            <div>

               <CategoryButtonGroup />



               <ListGroup as='ulhp'>
                  {this.state.events === [] ? <p>No Events Found</p> : eventElements}
               </ListGroup>
            </div>
         </div>
      );
   }
}

export default HomePage;