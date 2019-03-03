import React, { Component } from 'react';
import EventLink from './EventLink';
import styles from '../assets/CSS/sharedStyles.css';


class EventsList extends Component {
   // constructor(props){
   //    super(props);
   //    this.state = {

   //    }
   // }
   render(){
      return(
         <ul >
          <div 
          // onClick={() => this.props.navigation.navigate('EventDetail', {
          //  name: 'Volleyball',
          //  location: 'The Quad',
          //  date: '2/23/19',
          //  startTime: '1:45PM', 
          //  endTime: '3:15PM',
          //  description: 'Something super cool',
          //  category: 'Sports', 
          //  creator: 'jpauga',  
          //  spotsTaken: '6', 
          //  spotsAvailable: '10', 
          //  })}
           >
            <EventLink
              name='Volleyball'
              category='Sports'
              host='jpauga'
              date='2/23/19'
              time='1:45PM'
              />
            </div>

            <div>
              <EventLink
              name='SweetHeart Dance'
              category='Casual'
              host='pperez'
              date='2/14/19'
              time='6:35PM'
              />
            </div>

            <div>
              <EventLink
              name='Volleyball'
              category='Sports'
              host='jpauga'
              date='2/23/19'
              time='1:45PM'
              />
            </div>

            <div>
              <EventLink
              name='SweetHeart Dance'
              category='Casual'
              host='pperez'
              date='2/14/19'
              time='6:35PM'
              />
            </div>

          </ul>
      )
   }
}

export default (EventsList);