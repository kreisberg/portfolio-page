import React from 'react';
import './MySkills.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ShortAbout() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="skill-set-boxes">
      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1000">
        <h1>HTML / CSS</h1>
        <p>Use it to develop website markup and add styling.</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1400">
        <h1>BEM / SAAS (SCSS)</h1>
        <p>It makes my code clear and readable. Inheritance, variations, mixins.. So useful!</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1200">
        <h1>JavaScript</h1>
        <p>Use it to create visual effects, interaction and DOM elements.</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1300">
        <h1>TypeScript</h1>
        <p>It makes my code easier to refactoring and also enables to evade errors.</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1500">
        <h1>React.js</h1>
        <p>Use it to create applications or webpages that have a lot of reactivity.</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1200">
        <h1>MUI/Bulma/TAILWIND</h1>
        <p>The most experienced with, like their minimalistic styles.</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1000">
        <h1>Greensock - GSAP</h1>
        <p>Just started using it as an animation library. So impressed!</p>
        <p>___</p>
      </div>

      <div className="skill-set-box" data-aos="flip-up" data-aos-duration="1300">
        <h1>Photoshop / Figma</h1>
        <p>Have basic knowledge of how to design layout, images or icons.</p>
        <p>___</p>
      </div>
    </div>
  )
}
