import React from 'react';



import {
  Link

} from "react-router-dom";


function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/index">Homepage</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
    );
}

export default Menu;