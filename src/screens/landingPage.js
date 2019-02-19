import React, { Component } from "react";
import map from "../assets/images/map.PNG";

class LandingPage extends Component {
   render() {
      return (
         <div style={{
            justifyContent: 'center', margin: '0 auto',
            width: '100vh', height: '100vh',
         }}>
            <h1 style={{ textAlign: 'center' }}>Welcome "USER"</h1>
            <img src={map} style={{height: '100%', width: '80%'  }} />

         </div>
      );
   }
}

export default LandingPage;