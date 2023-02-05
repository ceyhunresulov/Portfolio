import React from "react";

function ProjectItem({ project }) {
  return (
    <li key={project.id} className="project">
      <div className="pro-img-box">
        <img src={project.img} alt="" className="pro-img" />
      </div>
      <p className="pro-desc">{project.title}</p>
      <div className="pro-buttons">
        <a href={project.github} target="_blank" className="pro-github pro-btn">
          GitHub
        </a>
        <a href={project.demo} target="_blank" className="pro-demo pro-btn">
          Live Demo
        </a>
      </div>
    </li>
  );
}

export default ProjectItem;
