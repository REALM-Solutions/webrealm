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
         
      }

      this.baseState = this.state

      this.handleValidation = this.handleValidation.bind(this)
   }


   handleValidation() {
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if (!fields["eventNameText"]) {
         formIsValid = false;
         errors["eventNameText"] = "Please enter an event ";
      }

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
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      var newDate = year + "" + month + "" + day;

      var chosenDate = new Date(this.state.fields["eventDate"]);
      var chsnyr = chosenDate.getUTCFullYear();
      var chsnmth = chosenDate.getUTCMonth() + 1;
      var chsnday = chosenDate.getUTCDate();
      var chsnDate = chsnyr + "" + chsnmth + "" + chsnday;
      var dif = chsnDate - newDate;

      if (dif < 0) {
         formIsValid = false;
         errors["eventDate"] = "Please enter a valid date";
      }

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

      if (!fields["eventDescription"]) {
         formIsValid = false;
         errors["eventDescription"] = "Please enter an event description.";
      }


      this.setState({ errors: errors });
      return formIsValid;
   }

   contactSubmit(e) {
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
            console.log (this.state + "reset state")
            
            
      } else {
         //TODO: this is where the BE content will go
      }

   }


   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
   }

   resetFields  () {
       this.setState(this.baseState)
      }


   render() {
      return (

         <div style={{ display: 'flex', width: '100%' }}>
            <div style={{ height: '75%', width: '50%', marginRight: '15px' }}>
               <img src={map} className="eventViewMapStyling" />
            </div>
            <form name="contactform" className="contactform" onSubmit={this.contactSubmit.bind(this)} style={{ width: '50%', }}>
               <div style={{ width: '100%' }}>
                  <fieldset style={{ width: '100%', margin: '5px' }} >
                     <CategoryDropdown onChange={this.handleChange.bind(this, "categoryType")}/>
                     <input style={{ marginTop: '10px', width: '80%' }} className="event_input" ref="event_name" type="text" size="30" placeholder="Event Name" onChange={this.handleChange.bind(this, "eventNameText")} value={this.state.fields["eventNameText"]} />
                     <br />
                     <span className="error">{this.state.errors["event_name"]}</span>
                     <br />
                     <input className="event_input" type='date' ref='eventDate' onChange={this.handleChange.bind(this, "eventDate")} value={this.state.fields["eventDate"]} />
                     <br />
                     <span className="error">{this.state.errors["eventDate"]}</span>
                     <br />
                     <input className="event_input" type='time' ref='eventStartTime' onChange={this.handleChange.bind(this, "eventStartTime")} value={this.state.fields["eventStartTime"]} />
                     <span >&nbsp;Enter Start Time </span>
                     <br />
                     <span className="error">{this.state.errors["eventStartTime"]}</span>
                     <br />
                     <input className="event_input" type='time' ref='eventEndTime' onChange={this.handleChange.bind(this, "eventEndTime")} value={this.state.fields["eventEndTime"]} />
                     <span >&nbsp;Enter End Time </span>
                     <br />
                     <span className="error">{this.state.errors["eventEndTime"]}</span>
                     <br />
                     <input className="event_input" type='number' ref='eventSpotsAvailable' onChange={this.handleChange.bind(this, "eventSpotsAvailable")} value={this.state.fields["eventSpotsAvailable"]} />
                     <span >&nbsp; Enter Available Spots </span>
                     <br />
                     <span className="error">{this.state.errors["eventEndTime"]}</span>
                     <br />
                     <input style={{ width: '80%' }} className="event_input" refs="eventLocation" type="text" size="30" placeholder="Location Details" onChange={this.handleChange.bind(this, "eventLocation")} value={this.state.fields["eventLocation"]} />
                     <br />
                     <span className="error">{this.state.errors["eventLocation"]}</span>
                     <br />
                     <textarea style={{ paddingLeft: '0', borderRadius: '3px', width: '80%' }} refs="eventDescription" cols="28" rows="4"
                        className="eventDescription" placeholder="Describe your event." onChange={this.handleChange.bind(this, "eventDescription")}>{this.state.fields["eventDescription"]}
                     </textarea>
                     <br />
                     <span className="error">{this.state.errors["eventDescription"]}</span>
                     <br />
                     <button style={{ border: '1px solid black', marginTop: '5px' }} className="btnpro" id="submit" value="Submit">Submit Event</button>
                  </fieldset>
               </div>
            </form>
         </div>
      )
   }
}
export default CreateEventPage;