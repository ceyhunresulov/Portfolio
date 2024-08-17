import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone, BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="container">
      <h5 className="contact-title">Get In Touch</h5>
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-content">
        <ul className="contact-info">
          <li className="contact-box">
            <AiOutlineMail className="contact-icon" />
            <h3 className="contact-box-title">Email</h3>
            <span className="contact-gmail">jeyhunnrasulov@gamil.com</span>
            <a href="mailto:ceyhunresulov23@gmail.com" className="send-message">
              Send a message
            </a>
          </li>
          <li className="contact-box">
            <BsPhone className="contact-icon" />
            <h3 className="contact-box-title">Phone</h3>
            <span className="contact-phone">051 947 07 14</span>
          </li>
          <a
            href="https://www.linkedin.com/in/ceyhun-resulov-301261237/"
            className="contact-box"
          >
            <BsLinkedin className="contact-icon" />
            <h3 className="contact-box-title">LinkedIn</h3>
            <span className="contact-phone">Link</span>
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
