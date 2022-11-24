import { useState } from "react";
import "./portfolio.css";

function Portfolio() {
  const [projects] = useState([
    {
      id: 1,
      title: "Calculator with JavaScript",
      img: "calc.png",
      github: "https://github.com/ceyhunresulov/js-calculator",
      demo: "https://calculator-js-pro.netlify.app/",
    },
    {
      id: 2,
      title: "Movies with React",
      img: "movies.png",
      github: "https://github.com/ceyhunresulov/react-movies",
      demo: "https://popular-movi.netlify.app/",
    },
    {
      id: 3,
      title: "To do list with React-hooks",
      img: "react_todo.png",
      github: "https://github.com/ceyhunresulov/react-todo-list",
      demo: "  https://636cd06288a2fc7aef18cfe9--reacttt-todolist.netlify.app/",
    },
  
  ]);
  return (
    <section id="portfolio" className="container">
      <h5 className="title-portfolio">My Recent Work</h5>
      <h2 className="title-portfolio">Portfolio</h2>
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.id} className="project">
            <div className="pro-img-box">
              <img src={project.img} alt="" className="pro-img" />
            </div>
            <p className="pro-desc">{project.title}</p>
            <div className="pro-buttons">
              <a
                href={project.github}
                target="_blank"
                className="pro-github pro-btn"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                className="pro-demo pro-btn"
              >
                Live Demo
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Portfolio;
