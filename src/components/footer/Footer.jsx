import "./footer.css";
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <section id="footer" className="footer">
      <ul className="nav-foot">
        <li className="nav-foot-item">
          <a href="#" className="nav-foot-link">
            Home
          </a>
        </li>
        <li className="nav-foot-item">
          <a href="#about" className="nav-foot-link">
            About
          </a>
        </li>
        <li className="nav-foot-item">
          <a href="#experience" className="nav-foot-link">
            Experience
          </a>
        </li>
        <li className="nav-foot-item">
          <a href="#portfolio" className="nav-foot-link">
            Portfolio
          </a>
        </li>
        <li className="nav-foot-item">
          <a href="#contact" className="nav-foot-link">
            Contact
          </a>
        </li>
      </ul>
      <ul className="footer-sosial">
        <li>
          <a
            href="https://www.linkedin.com/in/ceyhun-resulov-301261237/"
            className="footer-sosial-item"
          >
            <BsLinkedin className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ceyhunresulov"
            className="footer-sosial-item"
          >
            <BsGithub className="footer-icon" />
          </a>
        </li>
        <li>
          <a href="" className="footer-sosial-item">
            <BsInstagram className="footer-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ceyhun.resulov.566/"
            className="footer-sosial-item"
          >
            <BsFacebook className="footer-icon" />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Footer;
