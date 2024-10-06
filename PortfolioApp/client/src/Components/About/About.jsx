import React from "react";
import "./About.css";
import ProfilePic from "../../image/a.jpg"
import { RiGithubFill, RiLinkedinFill, RiMoneyDollarCircleFill, RiSendPlaneFill  } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <Fade delay={200}>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePic} alt="Profile Photo" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
           <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
           </div>
            <p>
            <span className="colored-word">• Lorem</span> ipsum, dolor sit amet consectetur adipisicing elit.<br />
            <br/>
            <span className="colored-word">• Sit</span> doloremque quam aspernatur perferendis nobis placeat quis? Modi laborum deleniti reprehenderit aperiam velit harum dolorum facere repellat natus tenetur! Eligendi, pariatur!<br />
            <span className="colored-word">• Lorem</span> ipsum, dolor sit amet consectetur adipisicing elit.<br />
            <span className="colored-word">• Sit</span> doloremque quam aspernatur perferendis nobis placeat quis? Modi laborum deleniti reprehenderit aperiam velit harum dolorum facere repellat natus tenetur! Eligendi, pariatur!<br />
            <br/>
            <span className="colored-word">• Lorem</span> ipsum, dolor sit amet consectetur adipisicing elit.<br />
            {/* <span className="colored-word">• Sit</span> doloremque quam aspernatur perferendis nobis placeat quis? Modi laborum deleniti reprehenderit aperiam velit harum dolorum facere repellat natus tenetur! Eligendi, pariatur! */}
            </p>
            <hr className="line-hr"></hr>
             {/* <h3 className="additional-title">My Passion for Coding !!!</h3> */}
             <div className="button-container">
                 <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="button github-button">
                  <RiGithubFill size={20} style={{ marginRight: '5px' }} /> GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="button linkedin-button">
                  <RiLinkedinFill size={20} style={{ marginRight: '5px' }}/> LinkedIn
                </a>
                <a href="https://www.upwork.com/" target="_blank" rel="noopener noreferrer" className="button upwork-button">
                  <RiMoneyDollarCircleFill size={20} style={{ marginRight: '5px' }}/> Upwork
               </a>
               <a href="mailto:your-email@example.com" className="button gmail-button">
                 <RiSendPlaneFill size={20} style={{ marginRight: '5px' }}/> Gmail
               </a>
             </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;













