import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {CgShutterstock} from 'react-icons/cg'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jorge-m%C3%A9ndez-51b928124/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/jormengin" target="_blank"><AiFillGithub/></a>
        <a href="https://wirestock.io/jorge.mendez" target="_blank"><CgShutterstock/></a>
    </div>
  )
}

export default HeaderSocials