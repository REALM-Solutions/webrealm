import React, { Component } from 'react';
import map from "../assets/images/map.PNG";
// import CategoryButtonGroup from '../components/CategoryButtonGroup/CategoryButtonGroup';
import CategoryDropdown from '../components/CategoryDropdown/CategoryDropdown';


class CreateEventPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         fields: {},
         errors: {},
         formIsValid: true

      }

      this.baseState = this.state

      this.handleValidation = this.handleValidation.bind(this)
   }


   handleValidation() {
      let fields = this.state.fields;
      let errors = {};


      //Name
      if (!fields["eventNameText"]) {
         this.state.formIsValid = false;
         errors["eventNameText"] = "Please enter an event ";
      }

      if (typeof fields["event_name"] !== "undefined") {
         if (!fields["event_name"].match(/^[\S\s]{5,25}$/)) {
            this.state.formIsValid = false;
            errors["event_name"] = "Name must be longer than a curse word";
         }
      }

      //Event Date
      if (!fields["eventDate"]) {
         this.state.formIsValid = false;
         errors["eventDate"] = "Please enter a valid date";
      }
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      if (day < 10) {
         day = "0" + day
      }
      if (month < 10) {
         month = "0" + month
      }

      var newDate = year + "" + month + "" + day;

      var chosenDate = new Date(this.state.fields["eventDate"]);
      var chsnyr = chosenDate.getUTCFullYear();
      var chsnmth = chosenDate.getUTCMonth() + 1;
      var chsnday = chosenDate.getUTCDate();
      if (chsnday < 10) {
         chsnday = "0" + chsnday
      }
      if (chsnmth < 10) {
         chsnmth = "0" + chsnmth
      }
      var chsnDate = chsnyr + "" + chsnmth + "" + chsnday;
      var dif = chsnDate - newDate;
      console.log(dif + " " + chsnDate + " " + newDate)

      if (dif < 0) {
         this.state.formIsValid = false;
         errors["eventDate"] = "Please enter a valid date";
      }

      //Event Start Time
      if (!fields["eventStartTime"]) {
         this.state.formIsValid = false;
         errors["eventStartTime"] = "Please enter a valid time";
      }

      //Event End Time
      if (!fields["eventEndTime"]) {
         this.state.formIsValid = false;
         errors["eventEndTime"] = "Please enter a valid time";
      }
      if (this.state.fields.eventStartTime > this.state.fields.eventEndTime) {
         this.state.formIsValid = false;
         errors["eventEndTime"] = "This must be later than the start time."
      }

      //Location
      if (!fields["eventLocation"]) {
         this.state.formIsValid = false;
         errors["eventLocation"] = "Cannot be empty";
      }

      //Description
      if (typeof fields["eventDescription"] !== "undefined") {
         if (!fields["eventDescription"].match(/^[\S\s]{5,325}$/)) {
            this.state.formIsValid = false;
            errors["eventDescription"] = "Description must be longer than a curse word, but shorter than War and Peace";
         }
      }

      if (!fields["eventDescription"]) {
         this.state.formIsValid = false;
         errors["eventDescription"] = "Please enter an event description.";
      }


      this.setState({ errors: errors });
      return this.state.formIsValid;
   }

   eventSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         let { categoryType, eventNameText, eventDescription, eventLocationText,
            eventDate, eventStartTime, eventEndTime, eventSpotsAvailable } = this.state.fields
         console.log(this.state.fields)
         fetch('http://localhost:8080/events', {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               category: categoryType,
               name: eventNameText,
               description: eventDescription,
               location: eventLocationText,
               date: eventDate,
               startTime: eventStartTime,
               endTime: eventEndTime,
               creator: {
                  username: "pperez"
               },
               availableSpots: eventSpotsAvailable,
               // availableSpots: eventSpotsAvailable,
               coordinates: '',
               public: 'true'
            }),
         }).then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson);
            })
            .catch((error) => {
               console.error(error);
            })
         alert('Event Created')
         this.resetFields()
         console.log(this.state + "reset state")


      } else {
         console.log("something went wrong, check validation errors")
      }

   }


   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   resetFields() {
      this.setState(this.baseState)
   }


   render() {
      return (

         <div className="createEventFormContainer" >
            <div className="createEventMapContainer" >
               <img className="createEventViewMapStyling" src={map} />
            </div>
            <form name="eventform" className="eventform" onSubmit={this.eventSubmit.bind(this)} >
               <div className="eventFormInputContainer" >
                  <fieldset className="createEventFieldset"  >

                     <input className="event_input" ref="event_name" type="text" size="30" placeholder="Event Name" onChange={this.handleChange.bind(this, "eventNameText")} value={this.state.fields["eventNameText"]} />
                     
                     <span className="error">{this.state.errors["event_name"]}</span>
                     <br />

                     <select className="categoryDropdown" ref='categoryType' onChange={this.handleChange.bind(this, "categoryType")} value={this.state.fields["categoryType"]}>
                        <option categoryType="sports">Sports</option>
                        <option categoryType="study">Study</option>
                        <option categoryType="games">Games</option>
                        <option categoryType="entertainment">Entertainment</option>
                        <option categoryType="casual">Casual</option>
                        <option categoryType="miscelaneous">Miscelaneous</option>
                     </select>
                     <label> Select Category</label>

                     <div className="eventInputDateTimeContainer" >
                        <input className="event_input_small" type='date' ref='eventDate' onChange={this.handleChange.bind(this, "eventDate")} value={this.state.fields["eventDate"]} />
                        <br />
                        <span className="error">{this.state.errors["eventDate"]}</span>
                        <br />

                        <div className="timeFormContainer" >
                           <input className="event_input_smaller" type='time' ref='eventStartTime' onChange={this.handleChange.bind(this, "eventStartTime")} value={this.state.fields["eventStartTime"]} />
                           <label >Enter Start Time </label>
                           <br />
                           <span className="error">{this.state.errors["eventStartTime"]}</span>
                           <br />
                        </div>

                        <div className="timeFormContainer">
                           <input className="event_input_smaller" type='time' ref='eventEndTime' onChange={this.handleChange.bind(this, "eventEndTime")} value={this.state.fields["eventEndTime"]} />
                           <label >Enter End Time </label>
                           <br />
                           <span className="error">{this.state.errors["eventEndTime"]}</span>
                           <br />
                        </div>

                        <div className="spotsFormContainer">
                           <input className="event_input_smaller" type='number' ref='eventSpotsAvailable' onChange={this.handleChange.bind(this, "eventSpotsAvailable")} value={this.state.fields["eventSpotsAvailable"]} />
                           <label >Enter Available Spots </label>
                           <br />
                        </div>
                     </div>
                     <span className="error">{this.state.errors["eventEndTime"]}</span>
                     <br />
                     <input style={{ width: '80%' }} className="event_input" refs="eventLocation" type="text" size="30" placeholder="Location Details" onChange={this.handleChange.bind(this, "eventLocation")} value={this.state.fields["eventLocation"]} />

                     <span className="error">{this.state.errors["eventLocation"]}</span>
                     <br />
                     <textarea  className="eventDescription"  refs="eventDescription" cols="28" rows="4"
                         placeholder="Describe your event." onChange={this.handleChange.bind(this, "eventDescription")}>{this.state.fields["eventDescription"]}
                     </textarea>
                     <br />
                     <span className="error">{this.state.errors["eventDescription"]}</span>
                     <br />
                     <button className="btnpro" id="submit" value="Submit">Submit Event</button>
                  </fieldset>
               </div>
            </form>
         </div>
      )
   }
}
export default CreateEventPage;