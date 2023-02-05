import { useState } from "react";
import "./portfolio.css";
import ProjectItem from "./ProjectItem";
import data from "../database";

function Portfolio() {
  const [projects] = useState(data);
  return (
    <section id="portfolio" className="container">
      <h5 className="title-portfolio">My Recent Work</h5>
      <h2 className="title-portfolio">Portfolio</h2>
      <div className="pro-title-box">
        <h1 className="project-title">Vanilla.js projects</h1>
      </div>
      <ul className="projects">
        {projects
          .filter((project) => project.type === "js")
          .map((project) => (
            <ProjectItem project={project} />
          ))}
      </ul>
      <div className="pro-title-box">
        <h1 className="project-title">React.js projects</h1>
      </div>
      <ul className="projects">
        {projects
          .filter((project) => project.type === "react")
          .map((project) => (
            <ProjectItem project={project} />
          ))}
      </ul>
    </section>
  );
}

export default Portfolio;
