import React, { Component } from 'react';
import map from "../assets/images/map.PNG";


class CreateEventPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         fields: {},
         errors: {}
      }

      this.handleValidation = this.handleValidation.bind(this)
   }


   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if (typeof fields["event_name"] !== "undefined") {
         if (!fields["event_name"].match(/^[\S\s]{5,25}$/)) {
            formIsValid = false;
            errors["event_name"] = "Name must be longer than a curse word";
         }
      }

      //Event Date
      if (!fields["eventDate"]) {
         formIsValid = false;
         errors["eventDate"] = "Please enter a valid date";
      }
      // else {console.log(this.state.fields.eventDate)}

      //Event Start Time
      if (!fields["eventStartTime"]) {
         formIsValid = false;
         errors["eventStartTime"] = "Please enter a valid time";
      }

      //Event End Time
      if (!fields["eventEndTime"]) {
         formIsValid = false;
         errors["eventEndTime"] = "Please enter a valid time";
      }
      if (this.state.fields.eventStartTime > this.state.fields.eventEndTime) {
         formIsValid = false;
         errors["eventEndTime"] = "This must be later than the start time."
      }

      //Location
      if (!fields["eventLocation"]) {
         formIsValid = false;
         errors["eventLocation"] = "Cannot be empty";
      }

      //Description
      if (typeof fields["eventDescription"] !== "undefined") {
         if (!fields["eventDescription"].match(/^[\S\s]{5,325}$/)) {
            formIsValid = false;
            errors["eventDescription"] = "Description must be longer than a curse word, but shorter than War and Peace";
         }
      }

      // if(typeof fields["email"] !== "undefined"){
      //   let lastAtPos = fields["email"].lastIndexOf('@');
      //   let lastDotPos = fields["email"].lastIndexOf('.');

      //   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
      //     formIsValid = false;
      //     errors["email"] = "Email is not valid";
      //   }
      // }



      this.setState({ errors: errors });
      return formIsValid;
   }

   contactSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         alert("Form submitted");
      } else {
         alert("Form has errors.")
      }

   }

   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }


   render() {
      return (
         <div>
            <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)}>
               <div className="col-md-6">
                  <fieldset>
                     <input ref="event_name" type="text" size="30" placeholder="Event Name" onChange={this.handleChange.bind(this, "event_name")} value={this.state.fields["event_name"]} />
                     <span className="error">{this.state.errors["event_name"]}</span>
                     <br />
                     <input type='date' ref='eventDate' onChange={this.handleChange.bind(this, "eventDate")} value={this.state.fields["eventDate"]} />
                     <span className="error">{this.state.errors["eventDate"]}</span>
                     <br />
                     <input type='time' ref='eventStartTime' onChange={this.handleChange.bind(this, "eventStartTime")} value={this.state.fields["eventStartTime"]} />
                     <span className="error">{this.state.errors["eventStartTime"]}</span>
                     <br />
                     <input type='time' ref='eventEndTime' onChange={this.handleChange.bind(this, "eventEndTime")} value={this.state.fields["eventEndTime"]} />
                     <span className="error">{this.state.errors["eventEndTime"]}</span>
                     <br />
                     <input refs="eventLocation" type="text" size="30" placeholder="Location Details" onChange={this.handleChange.bind(this, "eventLocation")} value={this.state.fields["eventLocation"]} />
                     <span className="error">{this.state.errors["eventLocation"]}</span>
                     <br />
                  </fieldset>
               </div>
               <div className="col-md-6">
                  <fieldset>
                     <textarea refs="eventDescription" cols="28" rows="10"
                        className="eventDescription" placeholder="Describe your event." onChange={this.handleChange.bind(this, "eventDescription")}>{this.state.fields["eventDescription"]}
                     </textarea>
                     <span className="error">{this.state.errors["eventDescription"]}</span>
                  </fieldset>
               </div>
               <div className="col-md-12">
                  <fieldset>
                     <button className="btn btn-lg pro" id="submit" value="Submit">Submit Event</button>
                  </fieldset>
               </div>
            </form>
         </div>
      )
   }
}
export default CreateEventPage;