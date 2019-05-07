import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import EventLink from "../components/EventLink";
import { withStore } from "../assets/helpers/store";
import { withRouter, NavLink } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import Modal from "../components/Modals/LoginSignUpRedirectModal"

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
         toggleLoggedIn: false,
         isShowing:false
      }
   }

   componentWillMount() {

      this.setState({
         events: this.props.results

      })

   }

   componentDidUpdate(prevProps, prevState) {
      if ((this.loggedInUser !== this.props.store.loggedInUser) && (this.state.toggleLoggedIn == false)) {
         this.setState({ loggedInUser: this.props.store.loggedInUser })
         this.setState({ toggleLoggedIn: true })
         if (this.state.loggedInUserName === 'User') {
            this.state.loggedInUserName = this.props.store.loggedInUser.userFirstName
         }
      }
      if (this.props.results !== this.state.events) {
         this.setState({ events: this.props.results })
      }
   }

   componentDidMount() {
      window.scrollTo(0, 0)
      this.targetElement = document.querySelector("searchResultsPageBanner");
      clearAllBodyScrollLocks();
      if (this.props.store.loggedInUser == null) {
         disableBodyScroll(this.targetElement);
         this.setState({
            isShowing: true
         });
      }
   }

   changeColor() {
      this.setState({ green: !this.state.green })
   }

   openModalHandler = () => {
      disableBodyScroll(this.targetElement);
      this.setState({
         isShowing: true
      });
   }

   closeModalHandler = () => {
      enableBodyScroll(this.targetElement);
      clearAllBodyScrollLocks();
      this.setState({
         isShowing: false
      });

      this.props.history.push('/')
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
         <div className="searchResultsPageBanner" >
            {this.state.isShowing ? <div className="back-dropsearch"></div> : null}

            {this.state.isShowing ? <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal> : null}
            <div>
            <h1 className="homePageBannerMsg"> These are your search results</h1>
            <img className="eventViewMapStyling" alt="" src={map} />
            <div>
               <ListGroup as='ulhp'>
                  {this.state.events === [] ? <p>No Events Found</p> : eventElements}
               </ListGroup>
               <NavLink to='/'>Clear Search</NavLink>

            </div>
            </div>
         </div>
      );
   }
}
const SearchResultsWithRouter = withRouter(SearchResults);


export default withStore(SearchResultsWithRouter);