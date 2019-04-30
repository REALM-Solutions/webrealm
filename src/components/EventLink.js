import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EventLink extends Component {
   constructor(props) {
      super(props);
      this.state = {
         eventName: this.props.name,
         eventCategory: this.props.category,
         eventHost: this.props.host,
         eventDate: this.props.date.slice(0, 10),
         eventStartTime: this.props.startTime.slice(11, 16),
         eventEndTime: this.props.endTime.slice(11, 16),
         eventLocation: this.props.location,
         eventDescription: this.props.description,
         spotsAvailable: this.props.spotsAvailable,
         coordinates: this.props.coordinates
      };
   }
   render() {
      const {eventName, eventCategory, eventHost, eventDate, eventStartTime, eventEndTime, eventLocation, eventDescription, spotsAvailable, coordinates} = this.state
      return (
         <Link to={{pathname:'/EventView', state: {
                  name:eventName,
                  category:eventCategory,
                  host:eventHost,
                  date:eventDate,
                  startTime:eventStartTime,
                  endTime:eventEndTime,
                  location:eventLocation,
                  description:eventDescription,
                  spotsAvailable:spotsAvailable,
                  coordinates:coordinates
            }}}>
            <div className='eventLinkContainer '>
               <p className='eventText'>{this.state.eventName}&nbsp; </p>
               <p className='eventText'>{this.state.eventCategory}&nbsp;</p>
               <p className='eventText'>{this.state.eventHost}&nbsp;</p>
               <p className='eventText'>{this.state.eventDate}&nbsp;</p>
               <p className='eventText'>{this.state.eventStartTime}&nbsp;</p>
            </div>
         </Link>
      )
   }
}


export default EventLink;