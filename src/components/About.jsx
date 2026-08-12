import { GraduationCap, School, MapPin, Terminal } from 'lucide-react'
import Reveal from './Reveal.jsx'

const INFO_CARDS = [
  { icon: GraduationCap, label: 'Education', value: 'B.Sc. CSIT' },
  { icon: School, label: 'College', value: 'Ambikeshwari Campus' },
  { icon: MapPin, label: 'Location', value: 'Dang, Nepal' },
  { icon: Terminal, label: 'Status', value: 'Student / Web Developer' },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p className="section__eyebrow">// 01 — About</p>
        <h2 className="section__title">About Me</h2>

        <div className="about__grid">
          <p className="about__text">
            I am a B.Sc. CSIT student at Ambikeshwari Campus, Dang. I am passionate about web
            development, programming and modern technologies. I enjoy creating practical projects
            and continuously improving my technical skills.
          </p>

          <div className="about__cards">
            {INFO_CARDS.map(({ icon: Icon, label, value }, index) => (
              <Reveal key={label} delay={index * 80}>
                <div className="about-card">
                  <div className="about-card__icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="about-card__label">{label}</p>
                    <p className="about-card__value">{value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
