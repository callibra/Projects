import React, { useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCv from "./MyCv.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { Fade } from "react-awesome-reveal";
import {Link} from "react-scroll"

const Home = ({ theme, changeTheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p className="moon-theme-icon">
            <BsFillMoonStarsFill size={20} />
          </p>
        ) : (
          <p className="sun-theme-icon">
            <BsFillSunFill size={20} />
          </p>
        )}
      </div>
      <div className="container home-content">
        <Fade>
          <h1>Hi I'm a John Doe</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "MERN Stack App",
                  "Web Developer",
                  "React Native App",
                  "Ethical Hacking",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </h2>
        </Fade>
        <Fade>
          <div className="button-for-action">
          <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>
            <div className="hire-me-button">
               Here Me <GrContact size={18}/>
            </div>
            </Link>  
            <div className="get-resume-button" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => {
                const link = document.createElement('a');
                  link.href = MyCv;
                  link.download = "MyCv.pdf";
                  link.click();
           }} >
                {isHovered ? "Download" : "Get Resume"} <FaDownload size={15} />
           </div>
          </div>
        </Fade>
      </div>
      <h3 className="colored-title-home">My Passion for Coding !!!</h3>
    </div>
  );
};

export default Home;

