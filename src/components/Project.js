export default function Project({name, img, used, challenges}) {
    return (
        <>
        <h3>{name}</h3>
          <figure>
            <img src={img} alt="a screenshot of a project"/>
          </figure>
          <div className="projects__used">
            <div>
              <h4>I Used</h4>
              <ul>
                {used.map( (item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            
            <div>
              <h4>Challenges</h4>
              <ul>
                {challenges.map( (challenge, i) => <li key={i}>{challenge}</li>)}
              </ul>
            </div>
          </div>
        </>
    )
}