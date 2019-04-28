import React, { Component } from "react";
import { withStore } from "../assets/helpers/store";

class LogIn extends Component {
   constructor(props) {
      super(props);

      this.state = {
         userEmail: '',
         userPassword: '',
         userLoggedIn: 'false',
         userId: "",
         userName: ""
      }
      this.userLogin = this.userLogin.bind(this)
      this.handleEmailChange = this.handleEmailChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
   }

   userLogin(e) {
      e.preventDefault();
      let { email } = this.state.userEmail
      let { password } = this.state.userPassword
      fetch('https://otq-dev.herokuapp.com/signin', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            email: this.state.userEmail,
            password: this.state.userPassword
         }),
      }).then((response) => response.json())
         .then((responseJson) => {
            if (responseJson !== null) {

               let user = Object.values(responseJson)
               if (user[0] === 'i') {
                  console.log("invalid")
               }
               else {
                  console.log(user)
                  this.state.userName = user[1]
                  this.state.userId = user[4]
                  this.state.userLoggedIn = 'true'
                  console.log(this.props.store)
               }
            }
            console.log(this.state)
            this.props.store.set("loggedInUser", this.state)

         })
         .catch((error) => {
            console.error(error);
         })
      alert('Logged In')

      this.props.history.push('/')
   }

   handleEmailChange(e) {
      this.setState({ userEmail: e.target.value })
      console.log(this.state)
   }

   handlePasswordChange(e) {
      this.setState({ userPassword: e.target.value })
      console.log(this.state)
   }

   render() {
      return (
         <div className="logInFormContainer">
            <form name="loginform" className="loginform" display="flex" onSubmit={this.userLogin.bind(this)} >
               <input className="login_input" ref="userEmailText" type="text" size="30" placeholder="E-Mail Address" onChange={this.handleEmailChange} value={this.state.userEmail} />
               <br />
               <input className="login_input" ref="passwordText" type="text" size="30" placeholder="Enter Password" onChange={this.handlePasswordChange} value={this.state.userPassword} />
               <br />
               <button className="btnpro" id="submit" value="Submit">Sign In</button>
            </form>
         </div>

      );
   }
}

export default withStore(LogIn);