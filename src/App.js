import './scss/styles.scss';
import lg from "./images/jacob/lg.jpg"
import github from "./images/icons/github-brands.svg"
import linkedin from "./images/icons/linkedin-brands.svg"
import { useState, useRef } from "react"
import Project from './components/Project';
import mail from './mail';

const App = () => {
  const [ active, setActive ] = useState('about')

  const aboutRef = useRef(null)
  const resumeRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const sendMessage = async () => {
    const name = nameRef.current?.value
    const email = emailRef.current?.value
    const message = messageRef.current?.value

    if (name && email && message) {
      try {
        response = await mail(name, email, message)
      } catch(err) {
        console.error(err)
        return
      } finally {
        nameRef.current.value = ""
        emailRef.current.value = ""
        messageRef.current.value = ""
      }
    }
  }

  window.onscroll = () => {
    const scrollPosition = window.pageYOffset
    const height = window.innerHeight
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
    <div className="App">
      <nav>
        <ul>
          <li className={active === "about" ?  "active" : ""}><a href="#about-me">About Me</a></li>
          <li className={active === "resume" ?  "active" : ""}><a href="#resume">Resume</a></li>
          <li className={active === "projects" ?  "active" : ""}><a href="#projects">Projects</a></li>
          <li className={active === "contact" ?  "active" : ""}><a href="#contact-me">Contact</a></li>
        </ul>
      </nav>
          <svg className="nav__svg" width="20px">
            <circle onClick={() => handleClick('about')} id="scroll-about" cx="8px" cy="8px" r={active === "about" ?  "8px" : "4px"} fill="white"/>
            <circle onClick={() => handleClick('resume')} cx="8px" cy="32px" r={active === "resume" ?  "8px" : "4px"} fill="white"/>
            <circle onClick={() => handleClick('projects')} cx="8px" cy="56px" r={active === "projects" ?  "8px" : "4px"} fill="white"/>
            <circle onClick={() => handleClick('contact')} cx="8px" cy="80px" r={active === "contact" ?  "8px" : "4px"} fill="white"/>
          </svg>
      <div className="page-sections">
            <section ref={aboutRef} aria-label="About Me" id="about-me" className="about-me">
              <h1>Hi! I'm Jacob Patton</h1>
              <p>I'm a Web developer located in Provo, Ut</p>
              <picture>
                <img src={lg} alt="Me with a tree in the background"/>
              </picture>
              <div className="icons">
                <img src={github} alt=""/>
                <img src={linkedin} alt=""/>
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
                <Project />
              </div>
            </section>
          
            <section ref={contactRef} id="contact-me" className="contact-me">
          <div className="section-content">
            <h2>Contact Me</h2>
            <form>
              <label>Name
                <input ref={nameRef} id="name" name="name" required/>
              </label>
              <label>Email
                <input ref={emailRef} id="email" name="email" required/>
              </label>
              <label>Message
                <textarea ref={messageRef} id="message" name="message" required/>
              </label>
              <button type="button" onClick={sendMessage}>SEND MESSAGE</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;