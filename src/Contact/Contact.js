import React, { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import './Contact.scss'
import Footer from '../Footer/Footer'
import gsap from 'gsap'

export default function Contact() {
  const timeline_contact = gsap.timeline();
  let text1 = useRef(null);
  useEffect(() => {
    timeline_contact.from(text1, {
      duration: 1,
      skewY: 10,
      y: 500,
      stagger: {
        amount: .4
      },
        opacity: 0
    }, "-=1")
  })
  return (
    <div>
      <Header timeline={timeline_contact} />
      <div className="contact-page">
        <div className="contact-page__container">
          <h1 ref = { el => text1 =el }>
            &nbsp; Looking for
            <br />
            &nbsp;&nbsp;&nbsp; the team
            <br />
            to
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            grow with
          </h1>
        </div>
      </div>
      <div className="call-buton">
        <a href="tel:+4542959666" class="call-button--btn">Call Me!</a>
      </div>
      <Footer />
    </div>
  )
}
