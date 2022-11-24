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
        My name is Ceyhun. I am 22 years old. I studied computer engineering in
        Azerbaijan Technical University with bachelor degree and currently I
        study Knowledge Acqustion in Azerbaijan Technical University Master
        degree. <br />
         I am Front-end Developer. I learned and practiced different
        technologies and frameworks.
      </p>
      <a href="#contact" className="btn btn-talk btn-about">
        Lets's Talk
      </a>
    </section>
  );
}

export default About;
