import './scss/styles.scss';
import sm from "./images/jacob/sm.jpg"
import lg from "./images/jacob/lg.jpg"
import github from "./images/icons/github-brands.svg"
import linkedin from "./images/icons/linkedin-brands.svg"
import ipTracker from "./images/projects/ip-tracker/ip-tracker.png"

const App = () => {

  /* <ReactFullpage
    licenseKey = {'66FA1FE0-CD044B13-9926086E-20D97A50'}
    scrollingSpeed = {1000}

    render={({state, fullpageApi}) => {
      <ReactFullpage.Wrapper> */
  
  return (
    <div className="App">
      <nav>
        <ul>
          <li className="active">About Me</li>
          <li>Resume</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section aria-label="About Me" className="about-me">
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

      <section className="resume">
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

      <section className="projects">
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
    
      <section className="contact-me">
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
