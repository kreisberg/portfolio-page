import React, {useEffect, useRef} from 'react'
import Header from '../Header/Header'
import './Projects.scss'
import arrow from '../Assets/arrow.svg'
import Footer from '../Footer/Footer'
import gsap from 'gsap'

export default function Projects() {
  const timeline_project = gsap.timeline();
  let text1 = useRef(null);
  let itemsProject = useRef(null);

  useEffect(() => {
    timeline_project.from(text1, {
      duration: 1,
      skewY: 10,
      y: 500,
      delay: 2,
      stagger: {
        amount: .4
      },
      opacity: 0
    }, "-=1.5");
    timeline_project.from(itemsProject, {
      duration: .5,
      opacity: 0,
      y: 100
    })
  })

  return (
    <div>
      <Header timeline={timeline_project}/>

      <div className="project-page">
        <div className="my-projects">
          <h1 ref={ el => text1 = el }>
            Training <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects
          </h1>
        </div>

        <div className="project-page-container">
          <div className="project-page__items" ref={el => itemsProject = el}>
            <div className="project-page__item">
              <a href="https://kreisberg.github.io/my-bike/" target="blank">
                <div className="project-page__item--header">
                  <h1>MY BIKE</h1>
                  <p>HTML / SCSS / JS</p>
                </div>

                <div className="project-page__item--image project-page__item--image-1"></div>

              </a>
              <a href="https://github.com/kreisberg/my-bike" target="blank">
                <div className="project-page__item--footer">
                  <p>Source code</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>

            <div className="project-page__item">
              <a href="https://kreisberg.github.io/todo-app/" target="blank">
                <div className="project-page__item--header">
                  <h1>TODO APP</h1>
                  <p>REACT / TS</p>
                </div>

                <div className="project-page__item--image project-page__item--image-2"></div>
              </a>

              <a href="https://github.com/kreisberg/todo-app" target="blank">
                <div className="project-page__item--footer">
                  <p>Source code</p>
                  <img src={arrow} alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="my-projects">
          <h1>
            Commercial <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; projects
          </h1>
        </div>

        <div className="project-page-container">
          <div className="project-page__item">
            <div className="project-page__item--image project-page__item--image-progress">
              <p>IN PROGRESS...</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  )
}

