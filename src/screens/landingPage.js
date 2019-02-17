import React, { Component } from "react";
import map from "../assets/images/map.PNG";

class LandingPage extends Component {
   render() {
      return (
         <div style={{
            justifyContent: 'center', alignItems: 'center', margin: '0 auto',
            width: '100vh', height: '100vh',
         }}>
            <h1 style={{ textAlign: 'center' }}>YUUUP</h1>
            <img src={map} style={{ margin: 'auto', width: '80vh', height: '60vh' }} />
         </div>
      );
   }
}

export default LandingPage;