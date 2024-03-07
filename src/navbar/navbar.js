import React from 'react';
import './navbar.css'; // assuming you have a separate CSS file for styling
import koinx from './koinx.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={koinx} className='logo'></img>
      </div>
      <div className='menu'>
      <MenuIcon />
      </div>
      <div className="navbar-right">
        <a href="#">Crypto Taxes</a>
        <a href="#">Free Tools</a>
        <a href="#">Resource Center</a>
        <button className='nav_btn'>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
