import React, {useEffect, useRef} from 'react'
import './Home.scss'
import Header from '../Header/Header';
import wave from '../Assets/wave.gif'
import arrow from '../Assets/arrow.svg'
import { Link } from 'react-router-dom';
import ShortAbout from '../ShortAbout/ShortAbout';
import MySkills from '../MySkills/MySkills';
import GetInTouch from '../GetInTouch/GetInTouch';
import Footer from '../Footer/Footer';
import gsap from 'gsap';

export default function Home() {
  let text1 = useRef(null)
  let text2 = useRef(null)
  let p1 = useRef(null)

  const timeline_home = gsap.timeline();
  useEffect(() => {
    timeline_home.from([text1, text2], {
      duration: 1,
      skewY: 14,
      y: 300,
      stagger: {
      amount: .1
      }
  },"-=1.2")
    timeline_home.from(p1, {
      duration: .6,
      x: -100,
      delay: .2,
      opacity: 0
    })
  })

  return (
    <div className='home'>
      <Header timeline = {timeline_home}/>
      <div className="container">
        <div className="container-1">
          <div className="container-1__txt-line" id='anastasia'>
            <p ref={el => text1 = el}>
              Anastasia <br /> &nbsp; &nbsp; &nbsp; Kreisberg
            </p>
          </div>
        </div>
      </div>

      <div className="left-side-quote">
        <p ref={el => p1 = el}>
          &quot;One machine can do the work of fifty ordinary persons.
          <br />
          No machine can do the work of one extraordinary person.&quot;
        </p>
      </div>

      <div className="container">
        <div></div>
        <div className="container-1">
          <div className="container-1__txt-line" id="frontend">
            <p ref={el => text2 = el}>
              &nbsp; &nbsp; Frontend &nbsp; <br /> Developer
            </p>
          </div>
        </div>
      </div>

      <div className="wave">
        <img src={wave} alt=""/>
      </div>

      <ShortAbout />

      <div className="my-skills" id="skill">
        <h1>My skills <img src={arrow} alt="" /></h1>
      </div>

      <MySkills />

      <div className="project-and-work">
        <h1>
          <Link className="project-and-work__link" to="/projects">
            &nbsp; My Projects <img src={arrow} alt="" />
          </Link>
        </h1>
        <br />
        <p>
          <a href='#projects'>
            (just click)
          </a>
        </p>
      </div>

      <GetInTouch />

      <Footer />
    </div>
  )
}
