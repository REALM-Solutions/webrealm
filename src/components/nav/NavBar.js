import React, { Component } from 'react';
import imgSrc from '../../asset/MSUD_Informal_2CPos_125x.png';
import Dropdown from '../dropdownmenu/Dropdown';
import './NavBar.css';
//import '../Search.search.js';

class NavBar extends Component {
    render() {
        return (
            // <div align="left">
            //     {/* <a href="#">
            //         <img src={imgSrc} style={imgStyle} home />

            //     </a> */}
            <div className='navbar' style={navStyle} align="left">


                <ol style={listStyle}>
                    <li><img src={imgSrc} style={imgStyle} /></li>
                    <li style={leftLi}><a href='#home' style={linkStyle} >Home</a></li>
                    <li style={cntrLi}><a href='#www.1.com' style={linkStyle} >My Activities</a></li>
                    <form>

                    </form>
                    {/* <li style={rightLi}><a href='#www.3.com' style={linkStyle} >Link3</a></li> */}
                    <li style={drpDwnLi}>
                        <Dropdown /></li>
                </ol>

            </div>
            // </div>
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
const cntrLi = {
    float: 'center'
}

const imgStyle = {
    height: '50px',
    width: '50px'
}

const drpDwnLi = {
    display: 'flex',
    float: 'right'
}
export default NavBar;