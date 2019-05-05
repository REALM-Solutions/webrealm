import React, { Component } from "react";
import { withStore } from "../assets/helpers/store";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Modal from "../components/Modals/LoginSignUpRedirectModal";

class Profile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         viewOnly: true,
         selectedCategory: '',
         events: [],
         loggedInUserName: 'User',
         userLoggedIn: 'false',
         loggedInUser: {},
         tggle: false,
      }
   }

  
   componentDidMount() {
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
         <div className="eventview_wrapper">
            {this.state.isShowing ? <div className="back-drop"></div> : null}
            {/* <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button> */}

            {this.state.isShowing ? <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal> : null}
         <div>the profile stuff will go here</div>
         </div>
      );
   }
}

export default withStore(Profile);