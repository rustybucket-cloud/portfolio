import './scss/styles.scss';
import sm from "./images/jacob/sm.jpg"
import lg from "./images/jacob/lg.jpg"
import github from "./images/icons/github-brands.svg"
import linkedin from "./images/icons/linkedin-brands.svg"
import ipTracker from "./images/projects/ip-tracker/ip-tracker.png"
import { useState, useRef } from 'react';

const App = () => {
  const [ active, setActive ] = useState('about')

  const aboutRef = useRef(null)
  const resumeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  window.onscroll = () => {
    console.log("scroll")
    const scrollPosition = window.pageYOffset
    const height = window.innerHeight
    console.log(scrollPosition, height)
    if (scrollPosition < height - 10 ) setActive('about')
    else if ( scrollPosition > height - 10 && scrollPosition < (height * 2) - 10) setActive('resume')
    else if ( scrollPosition > (height * 2) - 10 && scrollPosition < (height * 3) - 10) setActive('projects')
    else  setActive('contact')
  }

  const handleClick = (location) => {
    if (location === "about") aboutRef.current.scrollIntoView()
    else if (location === "resume") resumeRef.current.scrollIntoView()
    else if (location === "projects") projectsRef.current.scrollIntoView()
    else if (location === "contact") contactRef.current.scrollIntoView()
  }
  
  return (
    <div className="App" >
      <nav>
        <ul>
          <li className={active === "about" ?  "active" : ""}><a href="#about-me">About Me</a></li>
          <li className={active === "resume" ?  "active" : ""}><a href="#resume">Resume</a></li>
          <li className={active === "projects" ?  "active" : ""}><a href="#projects">Projects</a></li>
          <li className={active === "contact" ?  "active" : ""}><a href="#contact-me">Contact</a></li>
        </ul>
      </nav>

     <svg width="20px">
       <circle onClick={() => handleClick('about')} id="scroll-about" cx="8px" cy="8px" r={active === "about" ?  "8px" : "4px"} fill="white"/>
       <circle onClick={() => handleClick('resume')} cx="8px" cy="32px" r={active === "resume" ?  "8px" : "4px"} fill="white"/>
       <circle onClick={() => handleClick('projects')} cx="8px" cy="56px" r={active === "projects" ?  "8px" : "4px"} fill="white"/>
       <circle onClick={() => handleClick('contact')} cx="8px" cy="80px" r={active === "contact" ?  "8px" : "4px"} fill="white"/>
     </svg>

      <section ref={aboutRef} aria-label="About Me" id="about-me" className="about-me">
        <h1>Hi! I'm Jacob Patton</h1>
        <p>I'm a Web developer located in Provo, Ut</p>
        <picture>
          <img src={lg}/>
        </picture>
        <div className="icons">
          <img src={github} />
          <img src={linkedin} />
        </div>
      </section>

      <section ref={resumeRef} id="resume" className="resume">
        <div className="section-content">
          <h2>Resume</h2>

          <h3>Education</h3>
          <div className="education resume__section">
            <h4>Utah Valley University</h4>
            <p className="timeFrame">2019-2021</p>
            <p>Associates of Science</p>
          </div>

          <h3>Work Experience</h3>
          <div className="education resume__section">
            <div className="resume__section__title">
              <h4>Target</h4>
              <p>General Merchandise Expert</p>
            </div>
            <p  className="timeFrame">2020-Current</p>
            <ul>
              <li>Work in a team setting to ensure that time sensitive tasks are accomplished</li>
              <li>Solve problems for customers</li>
            </ul>
          </div>

          <h3>Skills</h3>
          <div className="resume__section">
            <ul>
              <li>HTML, CSS, Javascript</li>
              <li>Express js</li>
              <li>React</li>
              <li>jQuery</li>
              <li>SCSS</li>
              <li>Figma/Adobe XD</li>
              <li>Fluent Spanish speaker</li>
            </ul>
          </div>
        </div>
      </section>

      <section ref={projectsRef} id="projects" className="projects">
        <div className="section-content">
          <h2>Projects</h2>
          <h3>IP Address Tracker</h3>
          <figure>
            <img src={ipTracker} />
          </figure>
          <div className="projects__used">
            <div>
              <h4>I Used</h4>
              <ul>
                <li>jQuery</li>
                <li>SCSS</li>
                <li>IP Geolocation API by IPify</li>
                <li>Leaflet JS</li>
              </ul>
            </div>
            
            <div>
              <h4>Challenges</h4>
              <ul>
                <li>Learning Leaflet JS</li>
                <li>Creating a responsive background image</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    
      <section ref={contactRef} id="contact-me" className="contact-me">
        <div className="section-content">
          <h2>Contact Me</h2>
          <form>
            <label>Name
              <input id="name" required/>
            </label>
            <label>Email
              <input id="email" required/>
            </label>
            <label>Message
              <textarea id="message" required/>
            </label>
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
