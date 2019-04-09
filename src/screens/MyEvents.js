import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import "../assets/CSS/sharedStyles.css";
import TabList from '../components/TabList';
import EventsList from "../components/EventsList";
import Modal from "../components/Modals/LoginSignUpRedirectModal";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

class MyEvents extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isShowing: false
      }
   }

   componentDidMount() {
      // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav). 
      this.targetElement = document.querySelector("my_events_wrapper");
      clearAllBodyScrollLocks();
    }

   openModalHandler = () => {
      disableBodyScroll(this.targetElement);
      this.setState({
         isShowing: true
      });
   }

   closeModalHandler = () => {
      enableBodyScroll(this.targetElement);
      this.setState({isShowing: false});
      clearAllBodyScrollLocks();
      this.props.history.push('/')
   }

   render() {

      return (
         <div className="my_events_wrapper" >
            <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>
            {this.state.isShowing ? <div className="back-drop">
            <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal></div> : null}

             <div className="tabsFlexContainer" >
               <TabList >
                  <div label="Attending" className="tab-content">
                     <EventsList />
                  </div>
                  <div label="My Events" className="tab-content">
                     <EventsList />
                  </div>

               </TabList>
               <div  >
                  <img src={map} alt="" className="myEventsMapStyling" />
               </div>

            </div> 

         </div>


      );
   }
}

export default MyEvents;