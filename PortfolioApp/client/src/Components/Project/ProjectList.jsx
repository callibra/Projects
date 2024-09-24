import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Zoom } from "react-awesome-reveal";

const ProjectList = ({ name, des, projectlink, techused, img, color }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  // const colors = [
  //   "#FF00FF",
  //   "#FF7F50",
  //   "#008080",
  //   "#6495ED",
  //   "#FF69B4",
  //   "#00CED1",
  // ];

  return (
    <Zoom>
    <div
      className={show ? "project-list-opened project-list" : "project-list"}
      onClick={handleShowandCollapse}
      // onMouseEnter={() => setShow(true)}
        onMouseLeave={()=> setShow(false)}
    >
      {img && <img src={img} alt={`${name} preview`} className="project-image" />}
      <div className="title-and-collapse-option">
      <h5 style={{ color }}>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="description">
        {show ? (
          <p>{des}</p>
        ) : (
          <p>
            {des.substring(0, 55)} ... {" "}
            <span className="readmore">Description For This Project</span>
          </p>
        )}
      </div>
      <div className="row">
        <span className="title-x">Used for this project :</span>
        {techused &&
          techused.map((tech, index) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p>{tech.techname}</p>
              </div>
            </div>
          ))}
      </div>
      <span className="title-x">View a demo of this project</span>
      <div className="live-demo-button">
        <a target="_blank" href={projectlink}>
          Demo link <HiOutlineExternalLink size={18}/>
        </a>
      </div>
      {/* {show ? "Ivance" :null} */}
    </div>
    </Zoom>
  );
};

export default ProjectList;

// style={{backgroundColor:colors[index]}} // random color for used for this project/



