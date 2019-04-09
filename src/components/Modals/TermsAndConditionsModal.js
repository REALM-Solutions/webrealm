import React from 'react';
import "../../assets/CSS/sharedStyles.css"

const modal = (props) => {

    const styled=props.show ? {height:'80%'}:{height:'0%'}
    
    return (
        
        <div className="modtst" style={styled}>
            
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    
                }}>
                <div className="modal-header" style={styled}>
                    <h3>Terms And Conditions</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body"  style={styled}>
                    <p>
                    <iframe style={{width:'100%'}} src="https://docs.google.com/document/d/e/2PACX-1vRECMYNKNOcWY47A9Jn8X6MkPFDQsVzI29n8-RIk-Sh-Rijh1qXovIsHRXyG3IonvvF1lmkx543BdIb/pub?embedded=true"></iframe>
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
