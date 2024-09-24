import React from "react";
import "./About.css";
import ProfilePic from "../../image/a.jpg"
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
            <h3 className="additional-title">My Passion for Coding !!!</h3>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default About;






