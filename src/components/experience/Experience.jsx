import "./experience.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
import { DiCss3 } from "react-icons/di";
import {
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
} from "react-icons/si";

function Experience() {
  return (
    <section id="experience" className="container">
      <h5 className="exp-title">What Skills I Have</h5>
      <h2 className="exp-title">My Experience</h2>
      <div className="skills-box">
        <h3 className="skills-title">Skills</h3>
        <ul className="skills">
          <li className="skill-item">
            <AiFillHtml5 className="check-icon" />
            <span className="skill">Html</span>
          </li>
          <li className="skill-item">
            <DiCss3 className="check-icon" />
            <span className="skill">Css</span>
          </li>
          <li className="skill-item">
            <SiSass className="check-icon" />
            <span className="skill">Sass</span>
          </li>
          <li className="skill-item">
            <SiBootstrap className="check-icon" />
            <span className="skill">Bootstrap</span>
          </li>
          <li className="skill-item">
            <SiTailwindcss className="check-icon" />
            <span className="skill">Tailwind</span>
          </li>
          <li className="skill-item">
            <SiJavascript className="check-icon" />
            <span className="skill">JavaScript</span>
          </li>
          <li className="skill-item">
            <SiReact className="check-icon" />
            <span className="skill">React</span>
          </li>
          <li className="skill-item">
            <SiRedux className="check-icon" />
            <span className="skill">Redux</span>
          </li>
          <li className="skill-item">
            <SiMongodb className="check-icon" />
            <span className="skill">MongoDb</span>
          </li>
          <li className="skill-item">
            <BiGitBranch className="check-icon" />
            <span className="skill">Git</span>
          </li>
          <li className="skill-item">
            <AiFillGithub className="check-icon" />
            <span className="skill">GitHub</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
