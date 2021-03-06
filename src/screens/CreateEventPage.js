import React, { Component } from 'react';
import map from "../assets/images/map.PNG";
import Modal from "../components/Modals/LoginSignUpRedirectModal"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Map from "../components/maps/Map";
import { withStore } from "../assets/helpers/store";



class CreateEventPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         fields: {},
         errors: {},
         formIsValid: true,
         viewOnly: false,
         showModal: false,
         coordinates: {}
      }

      this.baseState = this.state
      this.handleValidation = this.handleValidation.bind(this)
      this.newDate = this.newDate.bind(this)

   }

   componentDidMount() {
      this.targetElement = document.querySelector("create_event_wrapper");
      if (this.props.store.loggedInUser == null) {
         disableBodyScroll(this.targetElement);
         this.setState({
            showModal: true
         });
      }
   }

   openModalHandler = () => {
      disableBodyScroll(this.targetElement);
      this.setState({
         showModal: true
      });
   }

   closeModalHandler = () => {
      enableBodyScroll(this.targetElement);
      this.setState({
         showModal: false
      });

      this.props.history.push('/')
   }

   handleValidation() {
      let fields = this.state.fields;
      let errors = {};


      //Name
      if (!fields["eventNameText"]) {

         this.state.formIsValid = false;

         errors["eventNameText"] = "Please enter an event name";
      }

      if (typeof fields["eventNameText"] !== "undefined") {
         if (!fields["eventNameText"].match(/^[\S\s]{3,25}$/)) {

            this.state.formIsValid = false;

            errors["eventNameText"] = "Name must be longer than 3 characters";
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
      if (typeof fields["eventLocation"] !== "undefined") {
         if (!fields["eventLocation"].match(/^[\S\s]{3,25}$/)) {

            this.state.formIsValid = false;
            errors["eventLocation"] = "Location must be longer than 3 characters";
         }
      }

      //Description
      if (typeof fields["eventDescription"] !== "undefined") {
         if (!fields["eventDescription"].match(/^[\S\s]{5,325}$/)) {

            this.state.formIsValid = false;

            errors["eventDescription"] = "Description must be longer than 5 characters and less than 325 characters";
         }
      }

      if (!fields["eventDescription"]) {

         this.state.formIsValid = false;

         errors["eventDescription"] = "Please enter an event description.";
      }


      this.setState({ errors: errors });
      return this.state.formIsValid;
   }

   showModal = () => {
      this.setState({ showModal: true });
   };


   eventSubmit(e) {
      e.preventDefault();
      if (this.handleValidation()) {
         let { categoryType, eventNameText, eventDescription, eventLocation,
            eventDate, eventStartTime, eventEndTime, eventSpotsAvailable, coordinates } = this.state.fields


         fetch('https://onthequad.herokuapp.com/events?userid=4321', {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               category: categoryType,
               name: eventNameText,
               description: eventDescription,
               location: eventLocation,
               date: eventDate,
               startTime: eventStartTime,
               endTime: eventEndTime,
               creator: this.props.store.loggedInUser.userName,
               availableSpots: eventSpotsAvailable,
               coordinates: { latitude: 39.744055, longitude: -105.004363 },
               public: 'true',
               attendees: ['placeholder']
            }),

         }).then((response) => response.json())
            .then((responseJson) => {
            })
            .catch((error) => {
               console.error(error);
            })
         alert('Event Created')
         this.resetFields()

         this.props.history.push('/')


      } else {
         this.resetFields()
         this.state.formIsValid = true;

      }

   }


   handleChange(field, e) {
      let fields = this.state.fields;
      fields[field] = e.target.value;
      this.setState({ fields });
      this.state.formIsValid = true;
   }

   handleTimeChange(field, e) {
      let fields = this.state.fields;
      let time = ""
      time = this.newDate(this.state.fields.eventDate, e.target.value)

      fields[field] = time;
      this.setState({ fields });
      this.state.formIsValid = true;
   }

   newDate(date, time) {

      let nDate = new Date(date + 'T' + time + 'Z')
      let nd = nDate.toJSON()


      return nd
   }


   resetFields() {
      this.state = this.baseState
   }



   render() {
      return (
         <div className="create_event_wrapper">
            {this.state.showModal ? <div className="back-drop"></div> : null}

            {this.state.showModal ? <Modal
               className="modal"
               show={this.state.showModal}
               close={this.closeModalHandler}>
            </Modal> : null}

            {!this.state.isShowing ? <div className="createEventFormContainer" >
               <div className="createEventMapContainer"  >
                  <img className="createEventViewMapStyling" alt="" src={map} />
                  {/* <Map markers={[{ position: this.state.latLng, name: this.state.name, description: this.state.location }]}
                     viewOnly={this.state.viewOnly} /> */}
               </div>

               <form name="eventform" className="eventform" onSubmit={this.eventSubmit.bind(this)} >
                  <div className="eventFormInputContainer" >
                     <fieldset className="createEventFieldset">

                        <input className="event_input" ref="eventNameText" type="text" size="30" placeholder="Event Name" onChange={this.handleChange.bind(this, "eventNameText")} value={this.state.fields["eventNameText"]} />
                        <br />
                        <span className="error">{this.state.errors["eventNameText"]}</span>
                        <br />

                        <select className="categoryDropdown" ref='categoryType' onChange={this.handleChange.bind(this, "categoryType")} value={this.state.fields["categoryType"]}>
                           <option categoryType="">Select A Category</option>
                           <option categoryType="sports">Sports</option>
                           <option categoryType="study">Study</option>
                           <option categoryType="games">Games</option>
                           <option categoryType="entertainment">Entertainment</option>
                           <option categoryType="casual">Casual</option>
                           <option categoryType="miscelaneous">Miscelaneous</option>
                        </select>
                        <label> Select Category</label>

                        <div className="eventInputDateTimeContainer" >
                           <div className="timeFormContainer">
                              <input className="event_input_small" style={{ maxHeight: '22.667px' }} type='date' ref='eventDate' onChange={this.handleChange.bind(this, "eventDate")} value={this.state.fields["eventDate"]} />
                              <label >Enter Date </label>
                              <br />
                              <span className="error">{this.state.errors["eventDate"]}</span>
                              <br />
                           </div>

                           <div className="timeFormContainer" >
                              <input className="event_input_smaller" type='time' ref='eventStartTime' onChange={this.handleTimeChange.bind(this, "eventStartTime")} />
                              <label >Enter Start Time </label>
                              <br />
                              <span className="error">{this.state.errors["eventStartTime"]}</span>
                              <br />
                           </div>

                           <div className="timeFormContainer">
                              <input className="event_input_smaller" type='time' ref='eventEndTime' onChange={this.handleTimeChange.bind(this, "eventEndTime")} />
                              <label >Enter End Time </label>
                              <br />
                              <span className="error">{this.state.errors["eventEndTime"]}</span>
                              <br />
                           </div>

                           <div className="spotsFormContainer">
                              <input className="event_input_smallerNums" type='number' min='1' ref='eventSpotsAvailable' onChange={this.handleChange.bind(this, "eventSpotsAvailable")} value={this.state.fields["eventSpotsAvailable"]} />
                              <label >Available Spots </label>
                              <br />
                           </div>
                        </div>


                        <input className="event_input" style={{ width: '80%' }} refs="eventLocation" type="text" size="30" placeholder="Location Details" onChange={this.handleChange.bind(this, "eventLocation")} value={this.state.fields["eventLocation"]} />
                        <br />
                        <span className="error">{this.state.errors["eventLocation"]}</span>
                        <br />
                        <textarea className="eventDescription" refs="eventDescription" cols="28" rows="4"
                           placeholder="Describe your event." onChange={this.handleChange.bind(this, "eventDescription")}>{this.state.fields["eventDescription"]}
                        </textarea>
                        <br />
                        <span className="error">{this.state.errors["eventDescription"]}</span>
                        <br />
                        <button className="btnpro" id="submit" value="Submit">Submit Event</button>
                     </fieldset>
                  </div>
               </form>
            </div> : null}
         </div>
      )
   }
}
export default withStore(CreateEventPage);