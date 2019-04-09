import React from 'react';
import { Route, NavLink, HashRouter, } from "react-router-dom";
import "../../assets/CSS/sharedStyles.css"
import { Button } from 'react-bootstrap';


const modal = (props) => {

    
    return (
        
        <div className="modtst" >
            
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    
                }}>
                <div className="modal-header" >
                    <h3>Please Sign Up For a Free Account</h3>
                </div>
                <div className="modal-body"  >
                    <p className="modal-body-text" style={{color:"white"}}>
                    To view and create events, please consider signing up for a free On The Quad Account!
                    </p>
                </div>
                <div className="modal-footer">
                <NavLink  style={{paddingRight:'30px'}} to="/"><button style={{height:'30px', backgroundColor:" #ff3333", color:"white", borderRadius:"5px"}}>Home</button></NavLink>
                <NavLink to="/SignUp"><button style={{height:'30px', backgroundColor:" #00cc00", color:"white", borderRadius:"5px"}}>Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default modal;
