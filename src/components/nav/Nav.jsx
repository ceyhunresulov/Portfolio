import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiFillProject } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { useState } from "react";

function Nav() {
  const [activate, setActivate] = useState("#");
  return (
    <nav className="navbar">
      <a
        href="#"
        className={activate === "#" ? "nav-link activate" : "nav-link"}
        onClick={() => setActivate("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activate === "#about" ? "nav-link activate" : "nav-link"}
        onClick={() => setActivate("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={
          activate === "#experience" ? "nav-link activate" : "nav-link"
        }
        onClick={() => setActivate("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activate === "#portfolio" ? "nav-link activate" : "nav-link"}
        onClick={() => setActivate("#portfolio")}
      >
        <AiFillProject />
      </a>
      <a
        href="#contact"
        className={activate === "#contact" ? "nav-link activate" : "nav-link"}
        onClick={() => setActivate("#contact")}
      >
        <MdContactMail />
      </a>
    </nav>
  );
}

export default Nav;
