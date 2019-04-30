import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import "../assets/CSS/sharedStyles.css";
import TabList from '../components/TabList';
import MyEventsList from "../components/MyEventsList";
import MyAttendingEventsList from "../components/MyAttendingEventsList";
import Modal from "../components/Modals/LoginSignUpRedirectModal";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { withStore } from "../assets/helpers/store";

class MyEvents extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isShowing: false,
      }
   }

   componentDidMount() {
      this.targetElement = document.querySelector("my_events_wrapper");
      clearAllBodyScrollLocks();
      if(this.props.store.loggedInUser == null){
         disableBodyScroll(this.targetElement);
      this.setState({
         isShowing: true
      });
      }
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
      this.props.history.push('/')
   }

   render() {

      return (
         <div className="my_events_wrapper" >
            {this.state.isShowing ? <div className="back-drop">
            <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal></div> : null}

             <div className="tabsFlexContainer" >
               <TabList >
                  <div label="Attending" className="tab-content">
                     <MyAttendingEventsList />
                  </div>
                  <div label="My Events" className="tab-content">
                     <MyEventsList />
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

export default withStore(MyEvents);