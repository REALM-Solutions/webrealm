import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import TermsandConditions from "./TermsandConditions";

class SignUp extends Component {
   constructor(props) {
      super(props);

      this.state = {
         fields: {},
         errors: {},
         formIsValid: true

      }
      this.handleValidation = this.handleValidation.bind(this)

   }

   userSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         let { firstName, lastName, email,  password,  } = this.state.fields
         console.log(this.state.fields)
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
               photoUrl: "ljhl"
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


      } else {
         this.resetFields()
         
         this.state.formIsValid = true;
         console.log("something went wrong, check validation errors")
      }

   }

   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
      this.state.formIsValid = true
      console.log(this.state.formIsValid)
   }

   resetFields() {
      this.state = this.baseState

   }

   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      console.log(fields)
      return this.state.formIsValid;
   }

   render() {
      return (
         <form name="userform" className="userform" onSubmit={this.userSubmit.bind(this)} >
            <div className="logInFormContainer">
               <input className="userInput" ref="firstNameText" type="text" size="30" placeholder="First Name" onChange={this.handleChange.bind(this, "firstName")} value={this.state.fields["firstName"]} />
               <br />
               <input className="userInput" ref="lastNameText" type="text" size="30" placeholder="Last Name" onChange={this.handleChange.bind(this, "lastName")} value={this.state.fields["lastName"]} />
               <br />
               <select className="schoolDropdown" ref='schoolName' onChange={this.handleChange.bind(this, "schoolName")} value={this.state.fields["schoolName"]}>
                  <option schoolName="MSU">Metropolitan State University</option>
                  <option schoolName="CUD">Colorado University, Denver</option>
                  <option schoolName="CCD">Community College Of Denver</option>
               </select>
               <label> Select Category</label>
               <br />
               <input className="userInput" ref="emailText" type="text" size="30" placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
               <br />
               <input className="userInput" ref="password" type="text" size="30" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]} />
               <br />
               <input className="userInput" ref="verifyPassword" type="text" size="30" placeholder="Verify Password"  value={this.state.fields["verifyPassword"]} />
               <br />

               <p>By signing up, you agree to the <NavLink to="/TermsandConditions">Terms & Conditions</NavLink></p>
               <br />
               <button className="btnpro" id="submit" value="Submit">Complete Sign-Up</button>
            </div>
         </form>

      );
   }
}

export default SignUp;