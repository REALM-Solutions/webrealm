import React, { Component } from "react";
import map from "../assets/images/map.PNG";

class EventView extends Component {
   render() {
      return (
         <div >
            <div style={{
            margin: '0 auto',
            width: '100%', height: '100%',
         }}>
         <img src={map} style={{ width: '80vh', height: '60vh', border: '2px solid #000000', float:'left' }} />
         </div>
            <div  style={{float:'right'}}>
               
               <ul>
                  <li>  <text>Event Name: Mighty Fine Shindig</text>  </li>
                  <li>  <text>Event Creator: Malcom Reynolds</text>  </li>
                  <li>  <text>Event Location: Miranda</text>  </li>
                  <li>  <text>Event Time: 4:00 PM Event Date: 12/5/1961</text>  </li>
               </ul>

            </div>
         </div>

      );
   }
}

export default EventView;