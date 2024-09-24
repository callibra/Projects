import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";
import { Fade } from "react-awesome-reveal";

const Project = () => {
  const data = [
    {
      name: "Mern Stack Job Portal",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
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
          techname: "Next JS",
        },
      ],
      img: "public/project.png",
    },
    {
      name: "Mern Stack Event Management Portal",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
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
          techname: "Nuxt JS",
        },
      ],
      img: "public/project.png",
    },
    {
      name: "Mern Stack Social Media",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Typescript JS",
        },
        {
          techname: "Nuxt JS",
        },
      ],
      img: "public/project.png",
    },
    {
      name: "Mern Stack Video Streaming",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Typescript JS",
        },
        {
          techname: "Angular JS",
        },
      ],
      img: "public/project.png",
    },
    {
      name: "Mern Stack Online Learning Platform",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Typescript JS",
        },
        {
          techname: "Angular JS",
        },
      ],
      img: "public/project.png",
    },
    {
      name: "Mern Stack E-commerc",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nesciunt adipisci nobis exercitationem omnis minima commodi quos libero ad veniam ab laudantium doloribus a natus eveniet nulla, tenetur consequuntur modi.",
      projectlink:
        "https://www.webcitz.com/wp-content/uploads/2022/08/WeHype-1024x611.png",
      techused: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Material UI",
        },
        {
          techname: "Redux",
        },
        {
          techname: "React JS",
        },
      ],
      img: "public/project.png",
    },
  ];

  const colors = [
    "#FF00FF",
    "#FF7F50",
    "#008080",
    "#6495ED",
    "#FF69B4",
    "#00CED1",
  ];

  return (
    <div className="container project-section" id="project">
      <Fade>
      <div className="section-title">
        <h5>Project</h5>
        <span className="line"></span>
      </div>
      </Fade>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12" key={item.name || index}>
            <ProjectList {...item} color={colors[index % colors.length]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

{/* <ProjectList {...item} color={colors[index % colors.length]} /> */}
