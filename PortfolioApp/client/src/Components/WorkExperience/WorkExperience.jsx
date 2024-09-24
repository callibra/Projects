import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdMapsHomeWork } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Google",
      position: "Full Stack Developer",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2019-2020",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      companyname: "Facebook",
      position: "Frontend Developer",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2020-2021",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      companyname: "YouTube",
      position: "Backend Developer",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2021-2022",
      techskills: [
        {
          techname: "Django",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      companyname: "Microsoft",
      position: "Web Designer",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2022-2023",
      techskills: [
        {
          techname: "Python",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Vue JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      companyname: "WhatsApp",
      position: "Server Administration",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2023-2024",
      techskills: [
        {
          techname: "Typescript",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Next JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
    {
      companyname: "Instagram",
      position: "DevOps",
      des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eius sint autem mollitia libero ex ratione porro voluptas eum minus, temporibus eos. At voluptas quidem similique culpa quaerat sapiente distinctio.",
      year: "2024-2025",
      techskills: [
        {
          techname: "Javascript",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Next JS",
        },
        {
          techname: "Material UI",
        },
      ],
      companylink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
    },
  ];

  const colors = [
    "#943678",
    "#FF7F50",
    "#6495ED",
    "#DC143C",
    "#FF69B4",
    "#00CED1",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <Fade>
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
      </Fade>
      <div className="timeline-section">
        <VerticalTimeline lineColor="tomato">
          {data.map((item, index) => (
            <VerticalTimelineElement
              key={item.companyname}
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
              icon={<MdMapsHomeWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle" style={{color:"yellow"}}>
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
              <div className="company-demo-button">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.companylink}
                >
                  Company Link <HiOutlineExternalLink size={18}/>
                </a>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default WorkExperience;






