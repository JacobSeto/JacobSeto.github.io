import { projects } from './data/projects.js'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="timeline">
        {projects.map(p => <ProjectCard key={p.id} {...p} />)}
      </div>
    </section>
  )
}
