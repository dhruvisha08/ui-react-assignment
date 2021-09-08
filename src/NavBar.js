import React from 'react';
import logo from './Logo.PNG';
import './style.css';



const NavBar = () => {
    return(
    <nav className="navbar bg-light navbar-light navbar-expand-sm">
    <div className="container">
        <img src={logo} alt="Opcito" />
    </div>
        <div className="navbar-nav">
                <a className="nav-item nav-link text" href="#">Preview Clients</a>
                <a className="nav-item nav-link active text" href="#">Add Clients</a>
               <a className="nav-item nav-link text" href="#">Log Out</a>
        </div>
  </nav>
 
            
            
    )
}

export default NavBar;