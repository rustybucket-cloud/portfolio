import { ReactComponent as X } from "../images/icons/x-solid.svg"

export default function ProjectPage({project, setIsFullPage}) {
    return project ? (
        <div className="projectPage">
            <button aria-label="close modal" classList="projectPage__close" onClick={() => setIsFullPage(false)}>
                <X />
            </button>
            <h1>{project.name}</h1>
            <figure>
                <img src={project.img} alt="project"/>
            </figure>
            <div className="projectPage__lists">
                <div className="projectPage__lists__div">
                    <h4>I Used</h4>
                    <ul>
                        {project && project.used.map( (item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div className="projectPage__lists__div">
                    <h4>Challenges</h4>
                    <ul>
                        {project && project.challenges.map( (challenge, i) => <li key={i}>{challenge}</li>)}
                    </ul> 
                </div>
            </div>
        </div>
    ) : null
}