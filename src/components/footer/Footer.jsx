/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { CgShutterstock } from "react-icons/cg";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">JORGE MÉNDEZ</a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/jorge-m%C3%A9ndez-51b928124/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/jormengin" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://wirestock.io/jorge.mendez" target="_blank">
          <CgShutterstock />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
