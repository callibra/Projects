import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const url = import.meta.env.VITE_FRONTEND_URL;
  const [menu, setMenu] = useState('');

  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <div className='welcome-admin'>
        <h2>Welcome Admin</h2>
      </div>
      <Link
          to={`${url}`}
          onClick={() => setMenu("admin")}
          className={menu === "admin" ? "active" : ""}
        >Back to Home Page
        </Link>
      <img className='profile' src={assets.profile_image} alt="Profile" />
    </div>
  );
};

export default Navbar;

