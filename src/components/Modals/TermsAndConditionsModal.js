import React from 'react';
import "../../assets/CSS/sharedStyles.css"

const modal = (props) => {
    
    return (
        
        <div className="tc-modtst" >
            
            <div className="tc-modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    
                }}>
                <div className="tc-modal-header" >
                    <h3>Terms And Conditions</h3>
                    
                </div>
                <div className="tc-modal-body"  >
                    <p>
                    <iframe style={{width:'100%',}} src="https://docs.google.com/document/d/e/2PACX-1vRECMYNKNOcWY47A9Jn8X6MkPFDQsVzI29n8-RIk-Sh-Rijh1qXovIsHRXyG3IonvvF1lmkx543BdIb/pub?embedded=true"></iframe>
                    </p>
                </div>
                <div className="tc-modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
