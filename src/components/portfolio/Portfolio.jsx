import { useState } from "react";
import "./portfolio.css";
import ProjectItem from "./ProjectItem";
import data from "../database";

function Portfolio() {
  const [projects] = useState(data);
  return (
    <section id="portfolio" className="container">
      <h5 className="title-portfolio">My Recent Work</h5>
      <h2 className="title-portfolio">Projects</h2>
      <ul className="projects">
        {projects.map((project) => (
          <ProjectItem project={project} />
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
