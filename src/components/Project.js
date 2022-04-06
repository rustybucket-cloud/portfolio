import { ReactComponent as Left } from "../images/icons/chevron-left.svg"
import { ReactComponent as Right } from "../images/icons/chevron-right.svg"
import projects from "../projects.json"
import ipTracker from "../images/projects/ip-tracker/ip-tracker.png"
import { Link } from "react-router-dom"
import ProjectPage from "./ProjectPage"

import { useRef, useState, useEffect } from "react"

export default function Project() {
  const [ project, setProject ] = useState(0)
  const [ animation, setAnimation ] = useState(false)
  const [ projectInfo, setProjectInfo ] = useState(null)
  const [ isFullPage, setIsFullPage ] = useState(false)

  useEffect(() => {
    setProjectInfo({
      name: projects[project].name, 
      img: ipTracker,
      used: projects[project].used,
      challenges: projects[project].challenges,
      live: projects[project].live,
      code: projects[project].code,
      rel: projects[project].rel
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
            <button onClick={() => setIsFullPage(true)}>About this Project</button>
          </div>
          <div className="projects__used">
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
          { isFullPage && <ProjectPage project={projectInfo} setIsFullPage={setIsFullPage}/> }
        </div>
    ) : null
}