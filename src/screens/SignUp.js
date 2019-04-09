import React, { Component } from "react";
import { NavLink, } from "react-router-dom";
import { validateEmail, validateName, validatePassword } from "../assets/helpers/userValidationTools"
import Modal from "../components/Modals/TermsAndConditionsModal"


class SignUp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         passwordVerification: '',
         formIsValid: true,
         redirectToHome: false,

      }

      this.baseState = this.state
      this.handleValidation = this.handleValidation.bind(this)
      this.errorSpan = this.errorSpan.bind(this)

   }

   openModalHandler = () => {
      this.setState({
         isShowing: true
      });
   }

   closeModalHandler = () => {
      this.setState({
         isShowing: false
      });
   }

   userSubmit(e) {
      e.preventDefault();
      console.log(this.state.formIsValid)
      if (this.handleValidation()) {
         let { firstName, lastName, email, password, } = this.state
         console.log(this.state)
         fetch('http://localhost:8080/users', {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               firstName: firstName,
               lastName: lastName,
               email: email,
               password: password,
               photoUrl: ""
            }),
         }).then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson);
            })
            .catch((error) => {
               console.error(error);
            })
         alert('User Created')
         this.resetFields()
         console.log(this.state + "reset state")
         this.props.history.push('/')



      } else {
         this.resetFields()
         this.state.formIsValid.setState(true);
         console.log("something went wrong, check validation errors")
      }
   }

   handleChange(field, e) {
      this.state[field] = e.target.value;
      this.setState({ field });
      this.state.formIsValid = true
      console.log(this.state.formIsValid)
      console.log(this.state)
   }

   resetFields() {
      this.state = this.baseState
   }

   errorSpan(message) {
      this.setState({ errorMsg: message })
   }

   handleValidation() {
      if (validateEmail(this.state.email, this.errorSpan) && validateName(this.state.firstName, this.errorSpan) &&
         validateName(this.state.lastName, this.errorSpan) && validatePassword(this.state.password, this.state.passwordVerification, this.errorSpan)) {
         console.log("handleValidation")
         return this.state.formIsValid = true;
      }
   }

   render() {

      return (
         <form name="userform" className="userform" style={{ width: '100%', textAlign: 'center' }} onSubmit={this.userSubmit.bind(this)} >
            <div className="logInFormContainer">
               <h1>Welcome to On the Quad!</h1>
               <p>Please create a free account to be able to let event organizers know that you're going or to create new events that others can attend!</p>
               <input className="user_input" ref="firstNameText" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, "firstName")} value={this.state.firstName} />
               <br />
               <input className="user_input" ref="lastNameText" type="text" size="30" placeholder="Last Name" onChange={this.handleChange.bind(this, "lastName")} value={this.state.lastName} />
               <br />
               <input className="user_input" ref="emailText" type="text" size="30" placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} value={this.state.email} />
               <br />
               <input className="user_input" ref="password" type="text" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.password} />
               <br />
               <input className="user_input" ref="verifyPassword" type="text" size="30" placeholder="Verify Password" onChange={this.handleChange.bind(this, "passwordVerification")} value={this.state.passwordVerification} />
               <br />

               <p> {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}


                  {this.state.isShowing ? <Modal
                     className="modal"
                     show={this.state.isShowing}
                     close={this.closeModalHandler}>

                  </Modal> : <p onClick={this.openModalHandler}>By siging up you agree to the Terms and Conditions</p>}</p>

               <br />
               <button className="btnpro" id="submit" value="Submit">Sign-Up</button>
               <br />
               <span className="error">{this.state.errorMsg}</span>
            </div>
         </form>

      );
   }
}

export default SignUp;