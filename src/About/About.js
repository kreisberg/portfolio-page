import React, {useEffect, useRef} from 'react'
import Footer from '../Footer/Footer'
import GetInTouch from '../GetInTouch/GetInTouch'
import Header from '../Header/Header'
import './About.scss'
import gsap from 'gsap'

export default function About() {
  let text1 = useRef(null)
  let image = useRef(null)
  let p1 = useRef(null)
  const timeline_about = gsap.timeline();
  useEffect(() => {
    timeline_about.from([text1], {
      duration: 2,
      y: -200,
      skewY: 1,
      stagger: {
        amount: .9
      }
    }, "-=.5")
    timeline_about.from(image, {
      duration: 2,
      y: -500,
      delay: .2,
      opacity: 0
    }, "-=.5")
    timeline_about.from(p1, {
      duration: .5,
      x: 200,
      skewX: 10,
      opacity: 0
    })
  })

  return (
    <div>
      <div className="about">
        <Header timeline={timeline_about}/>
        <div className="about-container">
          <div className="container-name">
            <p ref={el => text1 = el}>
              Anastasia <br /> &nbsp;&nbsp; Kreisberg
            </p>
          </div>

          <div ref={el => p1 = el}v className="container-quote container-quote--1">
            Hi, there! This page is a presentation about me, my taste and one of the projects to demonstrate my hard skills. Hope you enjoy!
          </div>

          <div className="container-quote container-quote--2">
            I found myself in tech industry and growth in it step by step.
            My background is in architecture and design so I'm well versed in composition and styling.
            And also I'm sure that a good visual part is nothing without good structure / code.
            <br />
            <br />
            I'm really prone to brainstorming and new knowledge. And that is my result of one year of hard trainings and self-improvement.
            Check my <a href='#projects'>projects</a> to see more.
            <br />
            <br />
            Would be grateful for your feedback. And also I'm open to suggestions. So if I've caught your eye, let's talk!
          </div>
          <div className="container-image"  ref={el => image = el}></div>
        </div>

        <div className="about-container2">
          <div className="about-container2--heading">
            <div className="about-text-lower">
              <p>Frontend</p>
            </div>
              <div className="about-text-lower">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Developer,</p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;Artist&nbsp;&nbsp;&nbsp; &</p>
              </div>
              <div className="about-text-lower">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enthusiast</p>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <GetInTouch />
          <Footer />
        </div>
      </div>
    </div>
  )
}
