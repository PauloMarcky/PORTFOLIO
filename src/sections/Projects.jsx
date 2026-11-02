import ProjectCard from '../components/ProjectCard.jsx'
import { projects, skills } from '../data/projects.js'
import '../styles/projects.css'

export default function Projects() {
  return (
    <section id="projects" className="page-section">
      <div className="dashboard-grid">
        <div className="section-headline"><h1>PROJECTS</h1></div>

        <div className="projects-feed">
          {/* {...project} spreads every field of the object in as props */}
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="skills-panel">
          <h2>MASTERY LEVEL</h2>
          {skills.map((skill) => (
            <div className="skill-row" key={skill.name}>
              <img className="skill-icon-img" src={`/images/${skill.icon}`} alt={skill.name} />
              <progress value={skill.level} max="100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
