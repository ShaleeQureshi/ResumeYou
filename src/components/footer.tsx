import React from "react";

// Importing images for footer
import LINKEDIN from "../assets/visuals/footer/linkedin.png";
import GITHUB from "../assets/visuals/footer/github.png";
const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="pt-5 pb-3">
        <a
          href="https://www.linkedin.com/in/qureshishahrukh/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={LINKEDIN} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/ShaleeQureshi"
          target="_blank"
          rel="noopener noreferrer">
          <img src={GITHUB} alt="GitHub" />
        </a>
        <hr id="aqua-underline" />
        <p>© 2023 - Shahrukh Qureshi</p>
      </div>
    </div>
  );
};
export default Footer;
