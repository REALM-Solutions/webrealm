import React, { Component } from "react";

class LogIn extends Component {
   render() {
      return (
         <div className="logInFormContainer">
            <input className="userInput" ref="firstNameText" type="text" size="30" placeholder="First Name" />
            <br />
            <input className="userInput" ref="lastNameText" type="text" size="30" placeholder="Last Name" />
            <br />
            <select className="categoryDropdown" ref='categoryType' >
               <option SchoolName="MSU">Metropolitan State University</option>
               <option SchoolName="CUD">Colorado University, Denver</option>
               <option SchoolName="CCD">Community College Of Denver</option>
            </select>
            <label> Select Category</label>
            <br/>
            <input className="userInput" ref="emailText" type="text" size="30" placeholder="Email Address" />
            <br />
            <input className="userInput" ref="password" type="text" size="30" placeholder="Password" />
            <br />
            <input className="userInput" ref="verifyPassword" type="text" size="30" placeholder="Verify Password" />
            <br />

            <input type="checkbox" value="TscsAccepted"  /><label>Accept Terms & Conditions</label>
            <br />
            <button className="btnpro" id="submit" value="Submit">Complete Sign-Up</button>
         </div>

      );
   }
}

export default LogIn;