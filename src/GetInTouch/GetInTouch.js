import React from 'react'
import './GetInTouch.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function GetInTouch() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <div className="get-in-touch" data-aos="fade">
        <h1>GET IN TOUCH</h1>
        <p data-aos="fade">Use the links below and contact me in any way you like!</p>
      </div>
    </div>
  )
}


