import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
import logo from "../../../static/assets/images/logo.png";

const NavComponent = (props) => {
    return (
        <div className="nav-bar">
            <div className='logo'>
                <img src= { logo } alt="logo" />
            </div>
            <div className='nav-wrapper'>
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>  
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">About</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>
            </div>            
        </div>
    );
}

export default withRouter(NavComponent);