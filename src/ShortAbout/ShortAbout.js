import React from 'react';
import './ShortAbout.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ShortAbout() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="short-about">
      <div className="short-about__main">
        <h1 data-aos="fade" data-aos-duration="1200">
          About me
        </h1>
      </div>
      <div className="short-about__sub-main">
        <p data-aos="fade" data-aos-duration="1500">
          I'm a Frontend Developer from Ukraine. So, my stress resistance and adaptability need no proofs!
          <br />
          Technology and terrific design are things that attract my eye. To be concentrated and in focus is the first.
          And be a passionate person and prone to art is the second. That's me in a nutshell. And also looking for perfection.
          Cause the product can be good, but it needs to be iconic. Right?
        </p>
      </div>
    </div>
  )
}