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
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body"  style={styled}>
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue">CONTINUE</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
