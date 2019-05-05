import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryButtonGroup from "../components/CategoryButtonGroup/CategoryButtonGroup";
import EventLink from "../components/EventLink";
import { clearAllBodyScrollLocks } from 'body-scroll-lock';
import Map from "../components/maps/Map";
import { withStore } from "../assets/helpers/store";
import {withRouter, NavLink} from 'react-router-dom'

class SearchResults extends Component {
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
      
               this.setState({
                  events: this.props.results
                  
               })
            
   }

   componentDidUpdate(prevProps, prevState) {
      if ((this.loggedInUser !== this.props.store.loggedInUser) && (this.state.tggle == false)) {
         this.setState({ loggedInUser: this.props.store.loggedInUser })
         this.setState({ tggle: true })
         if (this.state.loggedInUserName === 'User') {
            this.state.loggedInUserName = this.props.store.loggedInUser.userFirstName
         }
      }
      if(this.props.results!==this.state.events){
         this.setState({events:this.props.results})
      }
   }


   render() {
      let eventElements = []
      if (this.props.results === []) {
         eventElements.push(
            <div className="noEventContatiner">
               <p className="noEventMsg">No Events Found</p>
            </div>
         )
      } else {

         this.props.results.forEach(function (event, index) {
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
                  attendees={event.attendees}
                  coordinates={event.coordinates}
               />
            )
         })
      }

      return (
         <div className="homePageBanner" >
            <h1 className="homePageBannerMsg"> {this.state.loggedInUserName} these are your search results</h1>
            <img className="eventViewMapStyling" alt="" src={map} />
            <div>
               <ListGroup as='ulhp'>
                  {this.state.events === [] ? <p>No Events Found</p> : eventElements}
               </ListGroup>
               <NavLink to='/'>Clear Search</NavLink>

            </div>
         </div>
      );
   }
}
const SearchResultsWithRouter = withRouter(SearchResults);


export default withStore(SearchResultsWithRouter);