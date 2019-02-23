import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import addpicture from "../assets/images/addpicture.png";
import sharedStyles from "../assets/CSS/sharedStyles.css"

class EventView extends Component {
   constructor() {
      super();

      this.state = {
         green: false
      }
   }

   changeColor() {
      this.setState({ green: !this.state.green })

   }
   render() {
      let btn_class = this.state.green ? "greenButton" : "redButton";




      return (
         <span style={{ width: '100%', height: '100%' }} >
            <div style={{ textAlign: 'center' }}>
               <h1 style={{ color: '#38c9ff', fontWeight: 'bold', textAlign: 'center' }}>Event Name: Mighty Fine Shindig</h1>
            </div>
            <span style={{ margin: '0 auto', float: 'center', textAlign: 'center', display: 'grid', gridTemplateColumns: '1fr 4fr 1fr', }}>
               <time datetime="2019-04-20" class="icon">
                  <em>Saturday</em>
                  <strong>April</strong>
                  <span>20</span>
               </time>
               <img src={map} style={{ gridColumn: '2/5', width: '100%', height: '60vh', borderRadius: '20px', border: '2px solid #000000', margin: '10px', textAlign: 'left' }} />
               <div style={{ gridColumn: '6' }}>
                  <button className={btn_class} onClick={this.changeColor.bind(this)}
                     style={{ width: '100%', margin: '2em', marginLeft: '3em', height: '7em', width: '7em', borderRadius: '8px' }}>
                     <text>Attending</text></button>

               </div>
            </span>
            <span >
               <span style={{ display: 'grid' }}>

                  <ul style={{ gridColumn: '2/3', gridRow: '1/3', listStyleType: 'none', width: '800px' }} >

                     <li style={{ padding: '5px', height: '60px', marginBottom: '10px', textAlign: 'center' }}>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw' }}>Total Capacity:</text>
                        <text style={{ fontSize: '2vw' }}>9000 / </text>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw' }}>Total Attending:</text>
                        <text style={{ fontSize: '2vw' }}> 1</text>

                     </li>

                     <li style={{ borderRadius: '20px', border: '1px solid #000', padding: '5px', textAlign: 'center' }}>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw', textAlign: 'center' }}>Event Host:</text>
                        <text style={{ fontSize: '2vw' }}> Malcom Reynolds</text>
                     </li>

                     <li style={{ borderRadius: '20px', border: '1px solid #000', padding: '5px', textAlign: 'center' }}>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw' }}>Event Location:</text>
                        <text style={{ fontSize: '2vw' }}> Miranda</text>
                     </li>

                     <li style={{ borderRadius: '20px', border: '1px solid #000', padding: '5px', textAlign: 'center' }}>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw' }}>Total Capacity:</text>
                        <text style={{ fontSize: '2vw' }}>9000 / </text>
                        <text style={{ fontWeight: 'bold', fontSize: '2vw' }}>Total Attending:</text>
                        <text style={{ fontSize: '2vw' }}> 1</text>
                     </li>
                  </ul>
               </span>
            </span>
         </span>

      );
   }
}

export default EventView;