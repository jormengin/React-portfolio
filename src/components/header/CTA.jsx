// @ts-nocheck

import React from 'react'
import cv from '../../assets/JorgeMendezCv.pdf'
import {AiOutlineFilePdf} from 'react-icons/ai'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV <AiOutlineFilePdf className='pdflogo'/></a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA