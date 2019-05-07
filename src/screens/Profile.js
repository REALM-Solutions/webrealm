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
         toggleLoggedIn: false,
      }
   }


   componentDidMount() {
      if (this.props.store.loggedInUser == null) {
         disableBodyScroll(this.targetElement);
         this.setState({
            isShowing: true
         });
      } else {
         this.setState({ loggedInUser: this.props.store.loggedInUser })
         this.setState({ loggedInUserName: this.props.store.loggedInUser.userFirstName })
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
      this.setState({ isShowing: false });
      this.props.history.push('/')
   }

   resetBtnClick(e) {
      e.preventDefault();
      fetch('https://otq-dev.herokuapp.com/resetpassword', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: this.props.store.loggedInUser.userEmail,

         }),

      }).then((response) => response.json())
         .then((responseJson) => {
         })
         .catch((error) => {
            console.error(error);
         })
      alert('Password Reset Sent, Check your inbox!')
   }


   render() {
      return (
         <div className="profileView" >
            {this.state.isShowing ? <div className="back-drop"></div> : null}

            {this.state.isShowing ? <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal> : null}

            <div className="profileWrapper" >
               <span className = "profileSpan"  >
                  <div> User:&nbsp;{this.props.store.loggedInUser.userFirstName}&nbsp;{this.props.store.loggedInUser.userLastName} </div>
               </span>

               <div>User ID:&nbsp;{this.props.store.loggedInUser.userName}</div>
               <div>User Email:&nbsp;{this.props.store.loggedInUser.userEmail} </div>
               <button onClick={this.resetBtnClick.bind(this)}>Reset Password</button>
            </div>

         </div>
      );
   }
}

export default withStore(Profile);