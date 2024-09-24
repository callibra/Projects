import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
               <Link to='/'><img src={assets.logo} alt="" /></Link>
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde id vero dolore omnis soluta, sunt porro, ratione dolorum possimus libero itaque dignissimos autem debitis consequuntur qui natus cupiditate adipisci voluptatibus!</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/aboutus'><li>About us</li></Link>
                    <Link to='delivery'><li>Delivery</li></Link>
                    <Link to='privacypolicy'><li>Privacy policy</li></Link>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@foodapp.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024 © FoodApp - All Rights Reserved.</p>
    </div>
  )
}

export default Footer