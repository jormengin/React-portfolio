// @ts-nocheck
/* eslint-disable react/jsx-no-target-blank */
import React, { useRef,useState } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { TbBrandTelegram } from "react-icons/tb";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    )
      .then(() => {
        setConfirmationMessage(true);
        setTimeout(() => {
          setConfirmationMessage(false);
        }, 5000);
      });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jorge.mendezgines@gmail.com</h5>
            <a href="mailto:jorge.mendezgines@gmail.com" target="_blank">
              Mail me
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+34615912335</h5>
            <a href="https://wa.me/+34615912335 " target="_blank">
              Message me
            </a>
          </article>
          <article className="contact__option">
            <TbBrandTelegram className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>@jormengin</h5>
            <a href="https://t.me/jormengin" target="_blank">
              Message Me
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            id=""
            // @ts-ignore
            cols="30"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          {confirmationMessage && (
        <div className="confirmation-message">
          <p>Your message has been sent successfully! Thank you.</p>
        </div>
      )}
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default Contact;
