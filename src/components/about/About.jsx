import "./about.css";
import { FaUniversity, FaCode } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="container">
      <h5 className="title-about">get to know</h5>
      <h2 className="title-about">About Me</h2>
      <ul className="edu-info-box">
        <li className="edu-info">
          <FaUniversity className="edu-icon" />
          <strong className="edu-center">
            Azerbaijan Technical University
          </strong>
          <span className="specialty color-light">Computer engineering</span>
          <span className="degree color-light">Bachelor's degree</span>
          <span className="year color-light">2017 - 2021</span>
        </li>
        <li className="edu-info">
          <FaUniversity className="edu-icon" />
          <strong className="edu-center">
            Azerbaijan Technical University
          </strong>
          <span className="specialty color-light">Computer engineering</span>
          <span className="degree color-light">Master's degree</span>
          <span className="year color-light">2021 - 2023</span>
        </li>
        <li className="edu-info">
          <FaCode className="edu-icon" />
          <strong className="edu-center">
            Pragmatech Education & Development Center
          </strong>
          <span className="specialty color-light">Front-end Development</span>
        </li>
      </ul>
      <p className="about-me">
        My name is Jeyhun, and I’m a 24-year-old software developer with a
        Bachelor’s degree in Computer Engineering and a recently completed
        Master’s degree in Knowledge Acquisition, both from Azerbaijan Technical
        University. <br />I am a developer with more than 2+ years of
        experience in Frontend, Also Backend experience. I have used modern
        technologies and frameworks in my experience. I approach problem solving
        with analytical thinking, understand and optimize complex issues. In
        addition, my openness to continuous learning and self-improvement allows
        me to adapt to technological changes. I'm sure I can add a lot to your
        company and team as I continue to learn.
      </p>
      <a href="#contact" className="btn btn-talk btn-about">
        Contact
      </a>
    </section>
  );
}

export default About;
