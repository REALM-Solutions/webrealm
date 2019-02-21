import React, { Component } from "react";
import map from "../assets/images/map.PNG";
import { ListGroup } from "react-bootstrap";
import CategoryButtonGroup from "../components/CategoryButtonGroup/CategoryButtonGroup";

const API = 'https://hn.algolia.com/api/v1/search?query=redux';

class HomePage extends Component {

   constructor(props) {
      super(props);
      this.state = {
         hits: []
      };
   }

   componentDidMount() {
      fetch(API)
         .then(response => response.json())
         .then(
            data => this.setState({ hits: data.hits }));
   }


   render() {
      const { hits } = this.state;
      return (
         <div style={{ textAlign: 'center', margin: '0 auto', width: '100%', height: '100%' }}>
            <h1 style={{ textAlign: 'center' }}>Welcome "USER"</h1>
            <img src={map} style={{ width: '80vh', height: '60vh', border: '2px solid #000000' }} />
            <div>

               <CategoryButtonGroup />

               <ListGroup as='ul' style={{ listStyleType: 'none', textAlign: 'center', width: '100vh', margin: 'auto' }}>

                  <li style={{ width: '100vh', border: '2px solid #444' }}><text style={{ padding: '5px', fontWeight: 'bold' }}>Found a new nation :: 5/14/1607  ::  K.James  :: 4:00 PM  :: Study </text></li>
                  <li style={{ width: '100vh', border: '2px solid #444' }}><text style={{ padding: '5px', fontWeight: 'bold' }}>Flight Launch :: 1/28/1986  ::  C.McAuliffe  :: 4:00 PM  ::  Misc. </text></li>
                  <li style={{ width: '100vh', border: '2px solid #444' }}><text style={{ padding: '5px', fontWeight: 'bold' }}>Wrap up Party :: 5/8/1945  ::  W.Churchill  :: 4:00 PM  ::  Entertainment</text></li>


                  {/*  this section is for reading new data from a JSON file*/}
                  {/* {hits.map(hit =>
                  <ListGroup.Item as="li" active key={hit.objectID} style={{ border: '2px solid #444', }}>
                     <a href={hit.url} style={{color:'red'}}>{hit.title}</a>
                  </ListGroup.Item>
               )} */}
               </ListGroup>
            </div>
         </div>
      );
   }
}

export default HomePage;