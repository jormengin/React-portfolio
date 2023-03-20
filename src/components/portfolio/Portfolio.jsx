import React from "react";
import "./portfolio.css";
import guessr from "../../assets/guessr.png";
import devault from "../../assets/devault.png"

const About = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={guessr} alt="" />
          </div>
          <h3>Guessr - DOM logic game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jormengin/Guessr"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jormengin.github.io/Guessr/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={devault} alt="" />
          </div>
          <h3>Devault - Fullstack dev tool platform </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/deVault-io/devault"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://devault-app.fly.dev/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={guessr} alt="" />
          </div>
          <h3>Guessr - DOM logic game</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/jormengin/Guessr"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://jormengin.github.io/Guessr/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
