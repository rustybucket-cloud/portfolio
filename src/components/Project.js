import { ReactComponent as Left } from "../images/icons/chevron-left.svg"
import { ReactComponent as Right } from "../images/icons/chevron-right.svg"
import projects from "../projects.json"
import ipTracker from "../images/projects/ip-tracker/ip-tracker.png"

import { useRef, useState, useEffect } from "react"

export default function Project({name, img, used, challenges}) {
  const [ project, setProject ] = useState(0)
  const [ animation, setAnimation ] = useState(false)
  const [ projectInfo, setProjectInfo ] = useState(null)

  useEffect(() => {
    setProjectInfo({
      name: projects[project].name, 
      img: ipTracker,
      used: projects[project].used,
      challenges: projects[project].challenges,
      live: projects[project].live,
      code: projects[project].code,
      rel: projects[project].name.replace(" ", "").toLowerCase()
    })
  }, [project])

  useEffect(() => {
    if (animation) {
      setTimeout(() => setAnimation(false), 1500)
    }
  }, [animation])
  

  const projectRef = useRef(null)

  const changeProject = (direction) => {
    if (animation) return
    setAnimation(true)
    console.log(animation)
    setTimeout(() => {
      if (direction === "next") {
        if (project === projects.length - 1) setProject(0)
        else setProject(project => project += 1)
      }
      else if (direction === "back") {
        if (project === 0) setProject(projects.length - 1)
        else setProject(project => project -= 1)
      }
    }, 500)
    runAnimation(direction)
  }

  const runAnimation = (direction) => {
    projectRef.current.classList.add(direction)
    setTimeout(() => {
      setTimeout(() => {
        projectRef.current.classList.remove(direction)
      }, 700)
    }, 700)
  }

    return projectInfo ? (
      <div ref={projectRef} className="project">
        <h3>{projectInfo.name}</h3>
          <figure>
            <img src={projectInfo.img} alt="a screenshot of a project"/>
          </figure>
          <div className="projects__btns">
            <a href={projectInfo.live} target="_blank">Live Site</a>
            <a href={projectInfo.code} target="_blank">Code</a>
            <a href={`../${projectInfo.rel}`}>About this Project</a>
          </div>
          <div className="projects__used">
           {/*  <div>
              <h4>I Used</h4>
              <ul>
                {projectInfo.used.map( (item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            
            <div>
              <h4>Challenges</h4>
              <ul>
                {projectInfo.challenges.map( (challenge, i) => <li key={i}>{challenge}</li>)}
              </ul>
            </div> */}
          </div>
          <button className="left change-project"
            onClick={() => {
              changeProject("back")
              runAnimation("back")
            }}
            style={{
              display: animation ? "none" : "block"
            }}
          >
            <Left />
          </button>
          <button  className="right change-project" 
            onClick={() => {
                changeProject("next")
                runAnimation("next")
            }}
            style={{
              display: animation ? "none" : "block"
            }}
          >
            <Right/>
          </button>
        </div>
    ) : null
}