import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryButtonGroup from "../components/CategoryButtonGroup/CategoryButtonGroup";
import EventLink from "../components/EventLink";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import Map from "../components/maps/Map"

class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         viewOnly:true,
         selectedCategory: '',
         events: []
      }
   }

   componentWillMount() {
      clearAllBodyScrollLocks()
      let eventArray = []
      fetch('https://onthequad.herokuapp.com/events', {
         method: 'GET',
         headers: {
            'Access-Control-Allow-Origin': 'https://onthequad.herokuapp.com/'
         }
      })
         .then(response => response.json())
         .then(responseJson => {
            console.log(responseJson)
            if (responseJson !== null) {
               Object.values(responseJson).map(function (event) {
                  eventArray.push(event)
               })
               console.log(eventArray)
               this.setState({
                  events: eventArray
                  //at this point the objects in the events have coordinates.
               })
               console.log(this.state.events)
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
         // console.log(this.state.events)
         this.state.events.forEach(function (event, index) {
            console.log(eventElements)
            //at this point the objects in eventElements have the coordinates available
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
                  coordinates={event.coordinates}
               />
            )
         })
         console.log("fetched")
      }
      return (
         <div className="homePageBanner" >
            <h1 className="homePageBannerMsg">Welcome "USER"</h1>
            <img className="eventViewMapStyling" alt="" src={map}  />
            {/* <Map
            viewOnly={this.state.viewOnly}
            /> */}
            <div>

               <CategoryButtonGroup />

               <ListGroup as='Ulhp'>
                  {this.state.events === [] ? <p>No Events Found</p> : eventElements}
               </ListGroup>
               
            </div>
         </div>
      );
   }
}

export default HomePage;