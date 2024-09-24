import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  const data = [
    {
      name: "Oxford University",
      degre: "B.sc in Software Engineering",
      year: "2020-2022",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium dolores, minima qui autem expedita quam. Id corrupti earum iusto aspernatur debitis culpa adipisci voluptates, in ab at dolores deserunt.",
      educationlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      name: "MIT University",
      degre: "B.sc in Software Engineering",
      year: "2016-2020",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium dolores, minima qui autem expedita quam. Id corrupti earum iusto aspernatur debitis culpa adipisci voluptates, in ab at dolores deserunt.",
      educationlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      name: "Cambrige College",
      degre: "College Graduation",
      year: "2014-2016",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium dolores, minima qui autem expedita quam. Id corrupti earum iusto aspernatur debitis culpa adipisci voluptates, in ab at dolores deserunt.",
      educationlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      name: "Queen School",
      degre: "School Graduation",
      year: "2007-2013",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium dolores, minima qui autem expedita quam. Id corrupti earum iusto aspernatur debitis culpa adipisci voluptates, in ab at dolores deserunt.",
      educationlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
  ];

  const colors = ["#6495ED", "#DC143C", "#FF69B4", "#00CED1"];

  return (
    <div className="container education-section" id="education">
      <Fade>
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>
      </Fade>
      <div className="timeline-education-section">
        <VerticalTimeline lineColor="tomato">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: colors[index],
                color: "#fff",
                boxShadow: `0 5px 18px ${colors[index]}`, 
              }}
              contentArrowStyle={{ borderRight: `10px solid ${colors[index]}` }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<FaGraduationCap />}
            >
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.degre}
              </h4>
              <p>{item.des}</p>
              <div className="education-demo-button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.educationlink}
                >
                  About link <HiOutlineExternalLink size={18}/>
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;

