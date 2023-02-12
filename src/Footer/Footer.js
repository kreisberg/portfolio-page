import React from 'react'
import './Footer.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="footer">
        <div className="footer__container">
          <div className="footer__container--message-for-users" data-aos="fade" data-aos-duration="1200">
            <span>
              Contact me in any way <br /> you like
            </span>
          </div>

          <div className="footer__container--social-links social-links" data-aos="fade" data-aos-duration="1200">
            <div className="social-links--h">
              _
            </div>

            <div className="social-links--items">
              <a href="https://github.com/kreisberg" target="blank">Github</a>
              <a href="https://www.linkedin.com/in/anastasiakreisberg/" target="blank">LinkedIn</a>
              <a href="mailto:anastasia.kreisberg@gmail.com" target="blank">Mail</a>
            </div>
          </div>

          <div className="social-links" data-aos="fade" data-aos-duration="1200">
            <div className="social-links--h">
              _
            </div>

            <div className="social-links--items">
              <a href="https://wa.me/+380637166926" target="blank">Whatsapp</a>
              <a href="https://t.me/kreisberg" target="blank">Telegram</a>
              <a href="tel:+380637166926" target="blank">+38 063 716 6926</a>
            </div>
          </div>
          <div className="footer-btn" data-aos="fade" data-aos-duration="1200">
            <a href="#home">Get Started!</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom--left">
            <p>Ukraine / Denmark</p>
          </div>
          <div className="footer-bottom--right">
            <p>2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

