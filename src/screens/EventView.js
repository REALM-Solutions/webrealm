import React, { Component } from "react";
import "../assets/CSS/sharedStyles.css";
import Modal from "../components/Modals/LoginSignUpRedirectModal";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Map from "../components/maps/Map";
import { withStore } from "../assets/helpers/store";
import map from "../assets/images/map.PNG"


class EventView extends Component {
   constructor(props) {
      super(props);
      const { name, category, host, date, startTime, endTime, location, description, spotsAvailable, coordinates } = props.location.state
      this.state = {
         viewOnly: true,
         green: false,
         name: name,
         category: category,
         host: host,
         date: date,
         startTime: startTime,
         endTime: endTime,
         location: location,
         description: description,
         spotsAvailable: spotsAvailable,
         attendees: [],
         
         isShowing:false
      }
   }

   componentDidMount() {
      window.scrollTo(0, 0)
      this.targetElement = document.querySelector("eventview_wrapper");
      clearAllBodyScrollLocks();
      if(this.props.store.loggedInUser == null){
         disableBodyScroll(this.targetElement);
      this.setState({
         isShowing: true
      });
      }
    }

   changeColor() {
      this.setState({ green: !this.state.green })
   }

   openModalHandler = () => {
      disableBodyScroll(this.targetElement);
      this.setState({
         isShowing: true
      });
   }

   closeModalHandler = () => {
      enableBodyScroll(this.targetElement);
      clearAllBodyScrollLocks();
      this.setState({
         isShowing: false
      });
     
      this.props.history.push('/')
   }

   render() {
      let btn_class = this.state.green ? "greenButton" : "redButton";


      const btn_classStyle = {
         margin: '2em',
         marginLeft: '3em',
         height: '6em',
         width: '6em',
         borderRadius: '8px'
      };
      return (

         <div className="eventview_wrapper">
            {this.state.isShowing ? <div className="back-drop"></div> : null}

            {this.state.isShowing ? <Modal
               className="modal"
               show={this.state.isShowing}
               close={this.closeModalHandler}>
            </Modal> : null}
            
            <div className="eventViewMainDiv">

               <h1 className="eventHeader">{this.state.name}</h1>}
               <span className="eventViewMapStylingCont" >
                  <img src={map} alt="" className="eventViewMapStyling" />
                  {/* <div className="eventViewMapStyling">
                     <Map
                        markers={[{position: this.state.latLng, name: this.state.name, description: this.state.location}]}
                        viewOnly={this.state.viewOnly}
                     />
                     
                  </div> */}
                  <p className='eventDescription'><strong className="eventViewStrong">Description: </strong><br />{this.state.description}</p>
               </span>

               <span >
                  <ul className="ulEventData">

                     <li className="uleventdatali" >
                        <text className="lisTxt_lead">Total Attending:</text>
                        <text className="lisTxt_content">{this.state.attendees} </text>
                        <text className="lisTxt_lead">Total Capacity:</text>
                        <text className="lisTxt_content"> {this.state.spotsAvailable}</text>
                     </li>

                     <li className="eventLis">
                        <text className="lisTxt_lead">Event Date and Time:</text>
                        <text className="lisTxt_content"> {this.state.date} {this.state.startTime} to {this.state.endTime}</text>
                     </li>

                     <li className="eventLis">
                        <text className="lisTxt_lead">Event Host:</text>
                        <text className="lisTxt_content"> {this.state.host}</text>
                     </li>

                     <li className="eventLis">
                        <text className="lisTxt_lead">Event Location:</text>
                        <text className="lisTxt_content"> {this.state.location}</text>
                     </li>

                  </ul>

                  <div >
                     <button className={btn_class} onClick={this.changeColor.bind(this)}
                        style={btn_classStyle}>
                        {btn_class === 'greenButton' ? <text>Attending</text> : <text>I wanna go!</text>}</button>

                  </div>
               </span>
            </div> 

         </div>

      );
      
   }
}



export default withStore (EventView);