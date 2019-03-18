import React, { Component } from 'react';
import style from '../assets/CSS/sharedStyles.css';


class EventLink extends Component {
   constructor(props) {
      super(props);
      this.state = {
         eventName: this.props.name,
         eventCategory: this.props.category,
         eventHost: this.props.host,
         eventDate: this.props.date,
         eventStartTime: this.props.startTime,
         eventEndTime: this.props.endTime,
         eventLocation: this.props.location,
         eventDescription: this.props.description,
         spotsAvailable: this.props.spotsAvailable
      };
   }
   render() {
      return (
         <div className='eventLinkContainer '>
         
            <p className='eventText'>{ this.state.eventName }&nbsp; </p>
            <p className='eventText'>{ this.state.eventCategory }&nbsp;</p>
            <p className='eventText'>{ this.state.eventHost }&nbsp;</p>
            <p className='eventText'>{ this.state.eventDate }&nbsp;</p>
            <p className='eventText'>{ this.state.eventTime }&nbsp;</p>
         </div>
      )
   }
}


export default EventLink;