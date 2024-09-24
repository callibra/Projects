import React, {useState} from 'react'
import "./NavbarMobileView.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory, FcSalesPerformance } from "react-icons/fc";
import { MdCastForEducation } from "react-icons/md";
import { SiStackblitz } from "react-icons/si";
import {Link} from "react-scroll"
import { Fade } from 'react-awesome-reveal';
import logo from '../../image/a.jpg'; // Update the path to your logo image

const NavbarMobileView = () => {
  
    const [open,setOpen] = useState(false);

    const handleClick = ()=>{
        setOpen(!open)
    }
  
  return (
    <div className='mobile-view-navbar'>

<div className="navbar-header" style={{ display: 'flex', alignItems: 'center' }}>
    <p style={{ margin: 0 }}>
        <GiHamburgerMenu size={25} onClick={handleClick} />
    </p>
    {/* <h3 className="additional-title-mobile" style={{ marginLeft: '100px' }}>
        Wellcome to my Websites !!!
    </h3> */}
</div>
       <Fade>
       {open ? (<div className='mobile-nav'>
        <img src={logo} alt="Logo" className="logo"/>
        <ul>
            <li className="nav-item-mobileview"> <Link to="home" spy={true} smooth={true} duration={100} offset={-100}><FcHome size={25} /> Home</Link> </li>
            <li className="nav-item-mobileview"> <Link to="about" spy={true} smooth={true} duration={100} offset={-100}><FcNightPortrait size={25} /> About</Link> </li>
            <li className="nav-item-mobileview"> <Link to="workexperience" spy={true} smooth={true} duration={100} offset={-100}><FcFactory size={25} /> Work Experience </Link></li>
            <li className="nav-item-mobileview"> <Link to="techstack" spy={true} smooth={true} duration={100} offset={-100}><SiStackblitz size={25} color="orange"/> Tech Stack </Link></li>
            <li className="nav-item-mobileview"> <Link to="education" spy={true} smooth={true} duration={100} offset={-100}><MdCastForEducation size={25} color="yellow"/> Education </Link></li>
            <li className="nav-item-mobileview"> <Link to="project" spy={true} smooth={true} duration={100} offset={-100}><FcTodoList size={25} /> Projects </Link></li>
            <li className="nav-item-mobileview"> <Link to="testimonial" spy={true} smooth={true} duration={100} offset={-100}><FcSalesPerformance size={25} /> Testimonial </Link></li>
            <li className="nav-item-mobileview"> <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}><FcContacts size={25} /> Contact </Link></li>
          </ul>
        </div>):null }
        </Fade>
    </div>
  );
};

export default NavbarMobileView 




//////////////////////// 888 ////////////////////////////////////
