import React from 'react';
import { NavLink, } from "react-router-dom";
import "../../assets/CSS/sharedStyles.css"
import {  clearAllBodyScrollLocks } from 'body-scroll-lock';


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
                    <p className="modal-body-text" >
                    To view and create events, please consider signing up for a free On The Quad Account!
                    </p>
                </div>
                <div className="modal-footer">
                <NavLink style={{paddingRight:'30px'}} to="/"><button className="modal-signup-nav-btn" style={{backgroundColor:" #e60000"}} 
                onClick={() => {clearAllBodyScrollLocks()}}>Home</button></NavLink>
                <NavLink to="/SignUp"><button className="modal-signup-nav-btn" style={{ backgroundColor:" #00cc00"}}>Sign Up</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default modal;
