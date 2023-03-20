import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill, BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { GrNode } from "react-icons/gr";
import { SiMongodb, SiHandlebarsdotjs, SiPostman } from "react-icons/si";
import {FiCode} from 'react-icons/fi'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <h4>
                <AiFillHtml5 />
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">HTML5</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
            <article className="experience__details">
              <h4>
                <IoLogoCss3 />
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">CSS3</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
            <article className="experience__details">
              <h4>
                <IoLogoJavascript/>
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">JavaScript</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
            <article className="experience__details">
              <h4>
                <BsFillBootstrapFill/>
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">Bootstrap</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
            <article className="experience__details">
              <h4>
                <FaReact />
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">React</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
            <article className="experience__details">
              <h4>
                <SiHandlebarsdotjs/>
              </h4>
              <div className="experience__logos">
                <small className="text-ligth">Handlebars</small>
                <BsFillPatchCheckFill className="experience_icon"/>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
          <article className="experience__details">
            <h4>
              <GrNode />
            </h4>
            <div className="experience__logos">
              <small className="text-ligth">Node.js</small>
              <BsFillPatchCheckFill className="experience_icon"/>
            </div>
          </article>
          <article className="experience__details">
            <h4>
              <SiMongodb />
            </h4>
            <div className="experience__logos">
              <small className="text-ligth">MongoDB</small>
              <BsFillPatchCheckFill className="experience_icon"/>
            </div>
          </article>
          <article className="experience__details">
            <h4>
              <SiPostman />
            </h4>
            <div className="experience__logos">
              <small className="text-ligth">Postman</small>
              <BsFillPatchCheckFill className="experience_icon"/>
            </div>
          </article>
          <article className="experience__details">
            <h4>
              <FiCode />
            </h4>
            <div className="experience__logos">
              <small className="text-ligth">ExpressJS</small>
              <BsFillPatchCheckFill className="experience_icon"/>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
