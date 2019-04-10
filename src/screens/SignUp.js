import React, { Component } from "react";
import { NavLink, } from "react-router-dom";
import { validateEmail, validateName, validatePassword } from "../assets/helpers/userValidationTools"
import { clearAllBodyScrollLocks } from 'body-scroll-lock';


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

   componentDidMount() {
      
      clearAllBodyScrollLocks();
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
         this.state.formIsValid=true;
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
               <p>By signing up, you agree to the <NavLink to="/TermsandConditions">Terms & Conditions</NavLink></p>
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