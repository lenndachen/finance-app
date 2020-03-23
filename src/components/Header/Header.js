import React from 'react';

import './Header.css'
import logo from "../../assets/logo.png"


const Header = () =>{
    return(
        <div className="header">
            <div className="logo-section">
                <img className="logo" alt='' src={logo}/>
                <p className="logo-name">Bloom</p>
            </div>
            <div className="nav-bar">
                <p className="nav-bar item-1">Enter Data</p>
                <p className="nav-bar item-1"> View all Transactions</p>
                <p className="nav-bar item-1">Sign In</p>
            </div>
        </div>
    )
} 

export default Header;