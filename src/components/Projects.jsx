import { Github, ExternalLink } from 'lucide-react'
import Reveal from './Reveal.jsx'

const PROJECTS = [
  {
    name: 'Sajilo Bazar',
    description:
      'A multi-vendor e-commerce platform built using PHP, MySQL, HTML, CSS, Bootstrap and JavaScript.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://github.com/PuranChaudhary/sajilo-bazar',
    demo: 'https://example.com/',
  },
  {
    name: 'Personal Portfolio',
    description:
      'A modern responsive developer portfolio website built with React and Vite.',
    tags: ['React', 'Vite', 'JavaScript', 'CSS'],
    github: 'https://github.com/PuranChaudhary/puran-portfolio',
    demo: 'https://example.com/',
  },
  {
    name: 'Student Management System',
    description:
      'A web-based system for managing student records and academic information.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS'],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">// 03 — Projects</p>
        <h2 className="section__title">Featured Projects</h2>

        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.name} delay={index * 100}>
              <article className="project-card">
                <div className="project-card__top">
                  <span className="project-card__index">{'>'}_</span>
                  <h3 className="project-card__name">{project.name}</h3>
                </div>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__actions">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--small">
                    <Github size={16} />
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--small">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
