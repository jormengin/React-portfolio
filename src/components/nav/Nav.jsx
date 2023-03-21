/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useState }  from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'
import {BiMessageSquareDots} from 'react-icons/bi'


const About = () => {
const [activeNav, setActiveNav] = useState('#')
const handleNavClick = (navLink) => {
  setActiveNav(navLink);
};
return (
  <nav>
    <a
      href="#"
      onClick={() => handleNavClick('#')}
      className={activeNav === '#' ? 'active' : ''}
    >
      <AiOutlineHome />
    </a>
    <a
      href="#about"
      onClick={() => handleNavClick('#about')}
      className={activeNav === '#about' ? 'active' : ''}
    >
      <AiOutlineUser />
    </a>
    <a
      href="#experience"
      onClick={() => handleNavClick('#experience')}
      className={activeNav === '#experience' ? 'active' : ''}
    >
      <CgFileDocument />
    </a>
    <a
      href="#contact"
      onClick={() => handleNavClick('#contact')}
      className={activeNav === '#contact' ? 'active' : ''}
    >
      <BiMessageSquareDots />
    </a>
  </nav>
);
};

export default About;