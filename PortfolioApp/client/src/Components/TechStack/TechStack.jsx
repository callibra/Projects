import React, { useState } from "react";
import "./TechStack.css";
import { Fade, Zoom } from "react-awesome-reveal";

const TechStack = () => {
  const data = [
    {
      name: "Full Stack Developer",
    },
    {
      name: "Node JS",
    },
    {
      name: "Vue JS",
    },
    {
      name: "Express JS",
    },
    {
      name: "Vue JS",
    },
    {
      name: "Next JS",
    },
    {
      name: "Angular JS",
    },
    {
      name: "Vanila JS",
    },
    {
      name: "Javascript",
    },
    {
      name: "Typescript",
    },
    {
      name: "Python",
    },
    {
      name: "Django",
    },
    {
      name: "Design",
    },
    {
      name: "CPanel",
    },
    {
      name: "DevOps",
    },
  ];

  const colors = [
    "#FFBF00",
    "#FF7F50",
    "#F0E68C",
    "#9FE2BF",
    "#40E0D0",
    "#6495ED",
    "#CCCCFF",
    "#FF00FF",
    "#800080",
    "#008080",
    "#008000",
    "#800000",
    "#DC143C",
    "#FF69B4",
    "#00CED1",
  ];

  const [showMoreTechStack, setShowMoreTechStack] = useState(9);

  const loadMore = () => {
    setShowMoreTechStack((prev) => prev + 3);
  };

  return (
    <div className="container techstack-section" id="techstack">
      <Fade>
      <div className="section-title">
        <h5>TechStack</h5>
        <span className="line"></span>
      </div>
      </Fade>
      
      <div className="row">
      
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <Zoom>
            <div className={index===0?"tech-content-marked tech-content":"tech-content"}>
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
            </Zoom>
          </div>
        ))}
      </div>
      {showMoreTechStack >= data.length ? null : (
        <span className="load-more-tech-stack" onClick={loadMore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default TechStack;





