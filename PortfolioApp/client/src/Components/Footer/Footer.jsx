import React from 'react';
import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div> */}
            </div>
            <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Portfolio App By <a href="https://1van4e.com" target="_blank" rel="noopener noreferrer" className="blank-link"> 1van4e</a>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;





