import React from 'react'
import './testimonials.css'
import guille from '../../assets/avatar1.jpeg'
import ale from '../../assets/avatar2.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const About = () => {
  return (

    <section id='testimonials'>
      <h5>Reviews from the people that has worked with me</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials__container mySwiper'  spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={guille} alt="avatar1" />
          </div>
          <h5 className='client__name'>Guille García</h5>
            <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sapien et tincidunt sollicitudin. Quisque blandit ligula in est pellentesque feugiat. Donec lacinia facilisis lacus, ac tristique velit bibendum et. Vivamus vitae quam id nisi bibendum laoreet. Fusce eget sem tincidunt, fermentum elit vel, viverra elit. Nulla facilisi.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={ale} alt="avatar1" />
          </div>
          <h5 className='client__name'>Alejandra Bausá</h5>
            <small className='client__review'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada sapien et tincidunt sollicitudin. Quisque blandit ligula in est pellentesque feugiat. Donec lacinia facilisis lacus, ac tristique velit bibendum et. Vivamus vitae quam id nisi bibendum laoreet. Fusce eget sem tincidunt, fermentum elit vel, viverra elit. Nulla facilisi.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default About