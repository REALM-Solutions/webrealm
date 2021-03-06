import React from 'react';
import { NavLink, } from "react-router-dom";
import "../../assets/CSS/sharedStyles.css"
import { clearAllBodyScrollLocks } from 'body-scroll-lock';


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
                        To view and create events, create a free On the Quad account!
                    </p>
                </div>
                <div className="modal-footer" >
                    <NavLink style={{ paddingRight: '30px' }} to="/LogIn"><button className="modal-signup-nav-btn" style={{ backgroundColor: " #397fef" }}
                        onClick={() => { clearAllBodyScrollLocks() }}>Sign In</button></NavLink>
                    <NavLink to="/SignUp"><button className="modal-signup-nav-btn" style={{ backgroundColor: " #00cc00", marginRight:'30px' }}>Sign Up</button></NavLink>
                    <NavLink to="/AboutUs"><button className="modal-signup-nav-btn" style={{ backgroundColor: " #c8c5c9"}}>About Us</button></NavLink>
                </div>
            </div>
        </div>
    )
}

export default modal;
