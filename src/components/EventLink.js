import React, { Component } from 'react';
import style from '../assets/CSS/sharedStyles.css';
import { Route, NavLink, HashRouter, Link } from "react-router-dom";


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
         spotsAvailable: this.props.spotsAvailable
      };
   }
   render() {
      return (
         <Link to={{pathname:'/EventView', event:{
                  name:this.state.eventName,
                  category:this.state.eventCategory,
                  host:this.state.eventHost,
                  date:this.state.date,
                  startTime:this.state.startTime,
                  endTime:this.state.endTime,
                  location:this.state.location,
                  description:this.state.description,
                  spotsAvailable:this.state.spotsAvailable
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