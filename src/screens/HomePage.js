import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryDropdown from "../components/CategoryDropdown/CategoryDropdown";
import EventLink from "../components/EventLink"
// import CategoryDropdown from "../components/CategoryDropdown/CategoryDropdown";

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
            <div style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 3000 }}>
               <p style={{ fontSize: 40, color: 'gray' }}>No Events Found</p>
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
               />
            )
         })
         console.log("fetched")
      }
      return (
         <div style={{ textAlign: 'center', margin: '0 auto', width: '100%', height: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome "USER"</h1>
            <img src={map} style={{ width: '80vh', height: '60vh', border: '2px solid #000000' }} />
            <div>

               <CategoryDropdown />

               {/* <select style={{width:'800px', borderRadius:'4px', textAlign:'center'}}>
                  <option selectedCategory="sports">Sports</option>
                  <option selectedCategory="study">Study</option>
                  <option selectedCategory="games">Games</option>
                  <option selectedCategory="entertainment">Entertainment</option>
                  <option selectedCategory="casual">Casual</option>
                  <option selectedCategory="miscelaneous">Miscelaneous</option>
               </select> */}

               <ListGroup as='ul'>
                  {this.state.events === [] ? <p>No Events Found</p> : eventElements}
               </ListGroup>
            </div>
         </div>
      );
   }
}

export default HomePage;