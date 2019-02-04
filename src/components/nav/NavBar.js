import React, { Component } from 'react';
import imgSrc from '../../asset/MSUD_Informal_2CPos_125x.png';
import Dropdown from '../dropdownmenu/Dropdown';
class NavBar extends Component {
    render() {
        return (
            <div className='navbar' style={navStyle}>


                <ul style={listStyle}>
                    <li><img src={imgSrc} style={imgStyle} /></li>
                    <li style={leftLi}><a href='#home' style={linkStyle} >Home</a></li>
                    <li style={rightLi}><a href='#www.1.com' style={linkStyle} >My Activities</a></li>
                    <li style={rightLi}><a href='#www.2.com' style={linkStyle} >Link2</a></li>
                    <li style={rightLi}><a href='#www.3.com' style={linkStyle} >Link3</a></li>
                </ul>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Dropdown />

                </div>
            </div>
        );
    }
}

const listStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#000000',
    width: '100%'
}

const navStyle = {
    width: '100%',
    position: 'fixed',
    top: '0'
}

const linkStyle = {
    display: 'block',
    backgroundColor: '#000000',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
}

const leftLi = {
    float: 'left'
}

const rightLi = {
    float: 'right'
}

const imgStyle = {
    height: '50px',
    width: '50px'
}

export default NavBar;