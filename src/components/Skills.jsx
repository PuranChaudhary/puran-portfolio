import Reveal from './Reveal.jsx'

const SKILLS = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 82 },
  { name: 'React', level: 58 },
  { name: 'PHP', level: 80 },
  { name: 'Laravel', level: 10 },
  { name: 'MySQL', level: 80 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Git & GitHub', level: 75 },
]

function Skills() {
  return (
    <section id="skills" className="section section--panel">
      <div className="section__inner">
        <p className="section__eyebrow">// 02 — Skills</p>
        <h2 className="section__title">Technical Skills</h2>

        <div className="skills__grid">
          {SKILLS.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 60}>
              <div className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__name">{skill.name}</span>
                  <span className="skill-card__level">{skill.level}%</span>
                </div>
                <div className="skill-card__track">
                  <div className="skill-card__fill" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
