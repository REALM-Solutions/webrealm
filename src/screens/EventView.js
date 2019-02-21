import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import addpicture from "../assets/images/addpicture.png";

class EventView extends Component {
   render() {
      return (
         <div >
            <ul style={{ listStyleType: 'none', }}>
               <li style={{width:'30%px', display:'inline', margin:'0 auto', padding:'0'}}>
            <div style={{margin: '0 auto',}}>
               <img src={map} style={{ width: '80vh', height: '60vh', border: '2px solid #000000', float: 'left' }} />
            </div>
            </li>
            
            <li style={{width:'30%',  display:'inline', margin:'0 auto', padding:'0'}}>
            <div style={{ float: 'right' }}>
               <ul>
                  <li>  <text>Event Name: Mighty Fine Shindig</text>  </li>
                  <li>  <text>Event Creator: Malcom Reynolds</text>  </li>
                  <li>  <text>Event Location: Miranda</text>  </li>
                  <li>  <text>Event Time: 4:00 PM Event Date: 12/5/1961</text>  </li>
               </ul>
            </div>
            </li>

            <li style={{width:'30%',  display:'inline', margin:'0 auto', padding:'0'}}>
            <div style={{margin: '0 auto', }}>
               <img src={addpicture} style={{ width: '80vh', height: '60vh', border: '2px solid #000000', float: 'left' }} />
            </div>
            </li>

            </ul>
            
            
            
         </div>

      );
   }
}

export default EventView;