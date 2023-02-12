import React, {useRef, useEffect} from 'react'
import './2Header.scss'
import { Link } from 'react-router-dom'
import MenuIcon from '../Assets/sign.svg'
import gsap from 'gsap'

export default function Header({ timeline }) {
  let li1 = useRef(null)
  let li2 = useRef(null)
  let li3 = useRef(null)
  let li4 = useRef(null)

  useEffect(() => {
    timeline.from([li1,li2,li3,li4], {
      opacity: 0,
      duration: 1,
      delay: .2,
      y: 20,
      stagger: {
        amount: .6
      }
    })
  })

  return (
    <div>
      <header>
        <div className="toggle-menu">
          <img src={MenuIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li ref={el => li1 =el}>
            <Link to="/" className='li'>Home</Link>
          </li>

          <li ref={el => li2 =el}>
            <Link to="/about" className='li'>About</Link>
          </li>

          <li ref={el => li3 =el}>
            <Link to="/projects" className='li'>Projects</Link>
          </li>

          <li ref={el => li4 =el}>
            <Link to="/contact" className='li'>Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  )
}

