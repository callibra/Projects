import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className='welcome-admin'>
        <h2>Welcome Admin</h2>
      </div>
      <img className='profile' src={assets.profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;
