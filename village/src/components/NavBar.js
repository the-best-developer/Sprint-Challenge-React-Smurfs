import React from 'react';
import { NavLink } from 'react-router-dom'
import '../App.css';

const NavBar = () => {
  return (
      <div className="navBar">
        <h1>The Smurfs!</h1>
        <div className="navLinks">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/smurf-form">Add Smurf</NavLink>
        </div>
      </div>
  );
};

export default NavBar;