import React, { Component } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
// import jsonData from '../../assets/JSON/event.JSON'

const API='https://my-json-server.typicode.com/P3t3rP3r3z/JSONtestrepo';

class DataFetcher extends Component {
   constructor(props) {
      super(props);
      this.state = {
        events: []
      };
    }
 
    componentDidMount() {
      fetch(API)
        .then(response => response.json())
        .then(
          data => this.setState({events: data.events}));
    }
  
    render() {
      const { events } = this.state;
      return(
         <ul>
            {events.map(event=>
               <li key ={event.id}>
               <a href={event.url}>{event.name}</a>
               </li>
            )}
         </ul>
      );
    }
   }
    
 
export default DataFetcher;