import { BsLinkedin, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
function Sosial() {
  return (
    <ul className="sosial-icons">
      <li className="sosial-icon">
        <a
          href="https://www.linkedin.com/in/ceyhun-resulov-301261237/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </li>
      <li className="sosial-icon">
        <a href="https://github.com/ceyhunresulov" target="_blank">
          <BsGithub />
        </a>
      </li>
      <li className="sosial-icon">
        <a href="" target="_blank">
          <BsInstagram />
        </a>
      </li>
      <li className="sosial-icon">
        <a href="https://www.facebook.com/ceyhun.resulov.566/" target="_blank">
          <BsFacebook />
        </a>
      </li>
    </ul>
  );
}

export default Sosial;
