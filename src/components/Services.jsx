import { Code2, LayoutTemplate, Smartphone, Database } from 'lucide-react'
import Reveal from './Reveal.jsx'

const SERVICES = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building functional, full-stack web applications from planning to deployment.',
  },
  {
    icon: LayoutTemplate,
    title: 'Frontend Development',
    description: 'Crafting clean, interactive user interfaces with React and modern JavaScript.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Designing layouts that look and work great on every screen size.',
  },
  {
    icon: Database,
    title: 'Database Development',
    description: 'Structuring and managing relational databases with MySQL for real applications.',
  },
]

function Services() {
  return (
    <section id="services" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">// 05 — Services</p>
        <h2 className="section__title">What I Do</h2>

        <div className="services__grid">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 90}>
              <div className="service-card">
                <div className="service-card__icon">
                  <Icon size={22} />
                </div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__desc">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
