import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import addpicture from "../assets/images/addpicture.png";
import "../assets/CSS/sharedStyles.css";
import TabList from '../components/TabList';
import EventsList from "../components/EventsList";

class MyEvents extends Component {

   render() {

      return (
         <div className="tabsFlexContainer" >
            <TabList style={{width:'100vh'}}>
               <div label="Attending" className="tab-content">
                  <EventsList/>
               </div>
               <div label="My Events" className="tab-content">
                 <EventsList/>
               </div>
               
            </TabList>
            <div  >
                  <img src={map} className="myEventsMapStyling" />
               </div>

         </div>


      );
   }
}

export default MyEvents;