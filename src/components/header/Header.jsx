import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/main.png'
import HeaderSocials from './HeaderSocials'

const About = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jorge Méndez</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <HeaderSocials />
        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default About