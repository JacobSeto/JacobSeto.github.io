import { projects } from './data/projects.js'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects">
      <div className="title">
        <h1>Projects</h1>
        <p>This is a timeline of all the projects I have contributed to...</p>
        <p><span style={{color:'white'}}>White</span> → Personal • <span style={{color:'lightgreen'}}>Green</span> → Group • <span style={{color:'cyan'}}>Blue</span> → Research</p>
      </div>
      <div className="timeline">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}
