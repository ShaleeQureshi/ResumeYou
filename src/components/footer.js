import React from "react";

// Importing Images for footer from Assets
import GITHUB from "../assets/Images/footer/github.png";
import LINKEDIN from "../assets/Images/footer/linkedin.png";

const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="pt-5 pb-3 text-center">
        <a
          href="https://www.linkedin.com/in/shahrukh-qureshi-a735031b1/"
          target="_blank"
          rel="noopener noreferrer">
          <img src={LINKEDIN} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/ShaleeQureshi/ResumeYou"
          target="_blank"
          rel="noopener noreferrer">
          <img src={GITHUB} alt="LinkedIn" />
        </a>
        <hr id="footer_underline" />
        <p>© 2022 - ResumeYou</p>
      </div>
    </div>
  );
};
export default Footer;
