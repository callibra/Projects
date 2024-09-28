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
          <div className="hire-me-button">
            <Link to="contact" spy={true} smooth={true} duration={100} offset={-100}>Here Me <GrContact size={18}/></Link>
            </div>
            <div className="get-resume-button">
              <a
                href={MyCv}
                download="MyCv.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? "Download" : "Get Resume"} <FaDownload size={15} />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;

