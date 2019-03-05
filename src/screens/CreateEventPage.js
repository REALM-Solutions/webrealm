import React, { Component } from 'react';
import map from "../assets/images/map.PNG";


class CreateEventPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         category: '',
         eventNameText: '',
         eventDescriptionText: '',
         eventLocationText: '',
         eventDateText: '',
         eventStartTimeText: '',
         eventEndTimeText: '',
      }

      this.form = React.createRef();
      this.validate = this.validate.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this)
   }
   validate() {
      this.form.current.reportValidity();
   }


   handleSubmit(event) {
      if (this.state.category === '' || this.state.eventNameText === '' || this.state.eventLocationText === ''
         || this.state.eventDateText === '' || this.state.eventStartTimeText === '' || this.state.eventEndTimeText === '') {
         window.alert("All fields must be filled in")
         console.log(this.state)
      }
      console.log(this.state)
      window.alert("Event: " + this.state.eventNameText + " successfully created!")
      this.setState({
         category: '',
         eventNameText: '',
         eventDescriptionText: '',
         eventLocationText: '',
         eventDateText: '',
         eventStartTimeText: '',
         eventEndTimeText: '',
      })
   }
   render() {
      return (
         <div>
            <div style={styles.createEventMapContainer}>
               <img src={map} style={styles.createEventMap} />
            </div>
            <div style={styles.createEventContainer}>
               <form ref={this.form} onSubmit={e => e.preventDefault()} style={styles.createEventForm}>
                  <div>
                     <label for='eventDate' >Date</label>
                     <input required type='date' id='eventDate' onChange={(event) => this.setState({ eventDateText: event.target.value })} />

                     <label for='eventStartTime'>Start Time</label>
                     <input required type='time' id='eventStartTime' onChange={(event) => this.setState({ eventStartTimeText: event.target.value })} />

                     <label for='eventEndTime'>End Time</label>
                     <input required type='time' id='eventEndTime' onChange={(event) => this.setState({ eventEndTimeText: event.target.value })} />

                     <select required onChange={(value) => this.setState({ category: value })}>
                        <option value=''>Select a Category</option>
                        <option value='sports'>Sports</option>
                        <option value='games'>Games</option>
                        <option value='study'>Study</option>
                        <option value='entertainment'>Entertainment</option>
                        <option value='casual'>Casual</option>
                        <option value='misc'>Misc.</option>
                     </select>
                  </div>
                  <label for='eventName'>Event Name</label>
                  <input required type='text' id='eventName' style={styles.createEventTextInput} placeholder='Event Name' onChange={(text) => this.setState({ eventNameText: text.target.value })} />

                  <label for='eventLocation'>Location</label>
                  <input required type='text' id='eventLocation' style={styles.createEventTextInput} placeholder='Event Location' onChange={(text) => this.setState({ eventLocationText: text.target.value })} />

                  <label for='eventDescription'>Description</label>
                  <textarea required type='text' id='eventDescription' style={styles.createEventTextInput} placeholder='Event Description' onChange={(text) => this.setState({ eventDescriptionText: text.target.value })}>
                  </textarea>
                  <input type='submit' value='Create Event' />
               </form>
            </div>
         </div>
      )
   }
}

const styles = {
   createEventContainer: {
      width: '100%',
      borderRadius: '5px',
      backgroundColor: '#f2f2f2',
      textAlign: 'center'
   },

   createEventMapContainer: {
      textAlign: 'center'
   },

   createEventMap: {
      height: '600px',
      width: '600px'
   },

   createEventForm: {
      width: '60%',
      textAlign: 'center',
      display: 'inline-block'
   },

   createEventTextInput: {
      width: '100%',
      padding: '12px 20px',
      margin: '8px 0',
      display: 'inline-block',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      textAlign: 'center'
   }

   //  input[type=submit] {
   //    width: 100%;
   //    background-color: #4CAF50;
   //    color: white;
   //    padding: 14px 20px;
   //    margin: 8px 0;
   //    border: none;
   //    border-radius: 4px;
   //    cursor: pointer;
   //  }

   //  input[type=submit]:hover {
   //    background-color: #45a049;
   //  }

}
export default CreateEventPage;