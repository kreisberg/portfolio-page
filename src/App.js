import React, { useRef , useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.scss';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import gsap from 'gsap';

export default function App() {
  const load = gsap.timeline({
    paused: "true",
  });
  let loader = useRef(null)
  let progress = useRef(null)
  let percent = useRef(null)

  useEffect(() => {
    load.to([percent], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });
    load.to(progress, {
      duration: 0.8,
      width: "0%",
    });
    load.to(loader, {
      visibility: 'hidden',
      zIndex: -1
    });
  });

  var id;
  var width1 = 1;

  function loading() {
    id = setInterval(frame, 20);
  }
  function frame() {
    if (width1 >= 100) {
      clearInterval(id);
      load.play();
    } else {
      width1++;
      document.getElementById("percent").innerHTML = width1 + "%";
    }
  }
  window.addEventListener("load", (e) => {
    loading();
  })
  return (
    <div>
    <HashRouter>
    <div className="dot"></div>
    <div className="App">
    <div class="loader" ref={(el) => (loader = el)}>
      <div class="progress" ref={(el) => (progress = el)}>
        <div id="percent" ref={(el) => (percent = el)}>
          1%
        </div>
      </div>
    </div>
    <AnimatedCursor
      innerSize={9}
      outerSize={70}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={1.2}
    />
    <ScrollToTop />
      <Route>
        <Route path="/" exact><Home /></Route>
        <Route path="/home" exact><Home /></Route>
      </Route>
      <Route>
        <Route path="/about" exact><About /></Route>
      </Route>
      <Route>
        <Route path="/projects" exact><Projects /></Route>
      </Route>
      <Route>
        <Route path="/contact" exact><Contact /></Route>
      </Route>
    </div>
    </HashRouter>
    </div>
  );
}

