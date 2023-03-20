import React from "react";
import "./about.css";
import ME from "../../assets/aboutme.jpg";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineEnvironment } from "react-icons/ai";
import {MdWorkOutline} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know me</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutme_image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiTimeFive className="about__icon" />
              <h5>Experience</h5>
              <small>
                1 year of learning programming
                <small> 4+ years of photgraphy</small>
                <small>6+ years of client-based work</small>
              </small>
            </article>
            <article className="about__card">
              <AiOutlineEnvironment className="about__icon" />
              <h5>Location</h5>
              <small>IronHack Barcelona</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Projects</h5>
              <small>3 Frontend/Backend projects</small>
              <small>10+ photography projects</small>
              <small>100+ 1-to-1 clients</small>
            </article>
          </div>
          <p>Driven personal trainer and photographer transitioning into web development after completing a full-stack bootcamp. With excellent teamwork and interpersonal skills from diverse experiences, I offer valuable assets to the software engineering field. Motivated and detail-oriented, I am eager to apply my passion for problem-solving, innovation, and strong work ethic in a web development role, making a significant impact on projects while delivering top-quality solutions.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
