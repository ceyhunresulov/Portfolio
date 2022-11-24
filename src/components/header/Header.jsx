import Cv from "./Cv";

import Sosial from "./Sosial";
import "./header.css";

function Header() {
  return (
    <header className="container header-container">
      <div className="title">
        <h5>Hello i'm</h5>
        <h1>Ceyhun Resulov</h1>
        <h4>Frontend developer</h4>
      </div>
      <Cv />
      <div className="sosial-box">
        <Sosial />
        <div className="me-img-box">
          <img src="./me_img.jpg" className="me-img" alt="" />
        </div>
        <a href="#portfolio" className="scroll-down">
          Projects
        </a>
      </div>
    </header>
  );
}

export default Header;
