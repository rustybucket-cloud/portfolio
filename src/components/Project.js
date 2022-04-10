import ProjectPage from "./ProjectPage"

import { useState  } from "react"

export default function Project({project}) {
  const [ isFullPage, setIsFullPage ] = useState(false)

    return project ? (
      <div  className="project">
        <h3>{project.name}</h3>
          <figure>
            <img src={project.img} alt="a screenshot of a project"/>
          </figure>
          <div className="projects__btns">
            <a href={project.live} target="_blank" rel="noreferrer">Live Site</a>
            <a href={project.code} target="_blank" rel="noreferrer">Code</a>
            <button onClick={() => setIsFullPage(true)}>About this Project</button>
          </div>
          <div className="projects__used">
          </div>
          { isFullPage && <ProjectPage project={project} setIsFullPage={setIsFullPage}/> }
        </div>
    ) : null
}