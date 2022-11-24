import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

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
            <span className="contact-gmail">ceyhunresulov@gamil.com</span>
            <a href="mailto:ceyhunresulov23@gmail.com" className="send-message">
              Send a message
            </a>
          </li>
          <li className="contact-box">
            <BsPhone className="contact-icon" />
            <h3 className="contact-box-title">Phone</h3>
            <span className="contact-phone">051 947 07 14</span>
          </li>
        </ul>
        <form action="" className="contact-form">
          <div className="name-box">
            <input
              type="text"
              placeholder="Your Full Name"
              className="fullname input"
            />
          </div>
          <div className="email-box">
            <input
              type="text"
              placeholder="Your Email"
              className="email input"
            />
          </div>
          <textarea
            name=""
            id=""
            rows="5"
            className="message input"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="form-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
