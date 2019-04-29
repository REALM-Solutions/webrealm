import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryButtonGroup from "../components/CategoryButtonGroup/CategoryButtonGroup";
import EventLink from "../components/EventLink";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import Map from "../components/maps/Map";
import { withStore } from "../assets/helpers/store";

class HomePage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         viewOnly: true,
         selectedCategory: '',
         events: [],
         loggedInUserName: 'User',
         userLoggedIn: 'false',
         loggedInUser: {},
         tggle: false
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
            if (responseJson !== null) {
               Object.values(responseJson).map(function (event) {
                  eventArray.push(event)
               })
               this.setState({
                  events: eventArray
                  //at this point the objects in the events have coordinates.
               })
            }
         })
         .catch((error) => {
            console.error(error)
         });
   }

   componentDidUpdate(prevProps, prevState) {
      if ((this.loggedInUser !== this.props.store.loggedInUser) && (this.state.tggle == false)) {

         this.setState({ loggedInUser: this.props.store.loggedInUser })
         this.setState({ tggle: true })
         if (this.state.loggedInUserName === 'User') {
            this.state.loggedInUserName = this.props.store.loggedInUser.userFirstName
         }
      }
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
      }

      return (
         <div className="homePageBanner" >
            <h1 className="homePageBannerMsg">Welcome {this.state.loggedInUserName}</h1>
            <img className="eventViewMapStyling" alt="" src={map} />
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

export default withStore(HomePage);