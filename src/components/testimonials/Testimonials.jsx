import React from "react";
import "./testimonials.css";
import guille from "../../assets/avatar1.jpeg";
import ale from "../../assets/avatar2.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const About = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from the people that has worked with me</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container mySwiper"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={ale} alt="avatar1" />
          </div>
          <h5 className="client__name">Alejandra Bausá</h5>
          <h5 className="client__position">
            {" "}
            Senior Software Developer | Lead Teacher at Ironhack
          </h5>
          <small className="client__review">
            Jorge is an incredible developer and one of those standout students
            who is known for his tireless desire to learn, improve, challenge
            himself, and continually surpass his limits. Apart from having
            natural abilities to solve logic problems, he enjoys doing so, and
            puts the application and user experience above everything else,
            which leads him to develop amazing things - always bringing a smile.
            I have no doubt that the future holds great things for him!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={guille} alt="avatar1" />
          </div>
          <h5 className="client__name">Guille García</h5>
          <h5 className="client__position">Director of Product at Reviewpro</h5>
          <small className="client__review">
            I had the pleasure of studying with Jorge at Ironhack's Web
            Development Bootcamp. He is an incredibly smart and diligent
            individual who's always eager to learn and improve. His logical
            skills with Javascript are truly impressive and he's great at
            finding solutions to difficult problems. <br /><br />
            Jorge is passionate about software engineering and he's the kind of
            person every team would benefit from having. We did a few projects
            together and it was an incredible experience to pair program with
            him. He is great to work with, always willing to help and grow, and
            I am certain he will succeed in whatever he sets out to do.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default About;
