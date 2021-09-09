import React from 'react';
import logo from './Logo.PNG';
import './style.css';



const NavBar = (props) => {
    return(
    <nav className="navbar bg-light navbar-light navbar-expand-sm">
    <div className="container">
        <img src={logo} className="bg-light" alt="Opcito" />
    </div>
        <div className="navbar-nav">
                <a className={props.active}  href="/clientDetails">Preview Clients</a>
                <a className={props.passive}  href="/addClient">Add Clients</a>
               <a className="nav-item nav-link text" href="/signIn">Log Out</a>
        </div>
  </nav>
 
            
            
    )
}

export default NavBar;