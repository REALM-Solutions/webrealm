import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import addpicture from "../assets/images/addpicture.png";
import "../assets/CSS/sharedStyles.css"

class EventView extends Component {
   constructor(props) {
      super(props);

      this.state = {
         green: false
      }
   }

   changeColor() {
      this.setState({ green: !this.state.green })

   }
   render() {
      let btn_class = this.state.green ? "greenButton" : "redButton";

      const btn_classStyle = {
         width: '100%',
         margin: '2em',
         marginLeft: '3em',
         height: '7em',
         width: '7em',
         borderRadius: '8px'
      };

      return (
         <span >
            <div style={{ textAlign: 'center' }}>
               <h1 className="eventHeader">Event Name: Mighty Fine Shindig</h1>
            </div>
            <span className="calIcon" >
               <time datetime="2019-04-20" class="icon">
                  <em>Saturday</em>
                  <strong>April</strong>
                  <span>20</span>
               </time>
               <img src={map} className="eventViewMapStyling" />
               <div style={{ gridColumn: '6' }}>
                  <button className={btn_class} onClick={this.changeColor.bind(this)}
                     style={btn_classStyle}>
                     <text>Attending</text></button>

               </div>
            </span>
            <span >
               <span style={{ display: 'grid' }}>

                  <ul className="ulEventData">

                     <li style={{ padding: '5px', height: '60px', marginBottom: '5px', textAlign: 'center' }}>
                        <text className="lisTxt_lead">Total Attending:</text>
                        <text className="lisTxt_content">1s / </text>
                        <text className="lisTxt_lead">Total Capacity:</text>
                        <text className="lisTxt_content"> 9000</text>

                     </li>

                     <li className="eventLis">
                        <text className="lisTxt_lead">Event Host:</text>
                        <text className="lisTxt_content"> Malcom Reynolds</text>
                     </li>

                     <li className="eventLis">
                        <text className="lisTxt_lead">Event Location:</text>
                        <text className="lisTxt_content"> Miranda</text>
                     </li>

                  </ul>
               </span>
            </span>
         </span>

      );
   }
}

export default EventView;