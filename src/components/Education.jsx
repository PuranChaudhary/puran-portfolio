import Reveal from './Reveal.jsx'

const EDUCATION = [
  {
    degree: 'B.Sc. CSIT',
    institution: 'Ambikeshwari Campus, Ghorahi-15, Dang',
    note: 'Tribhuvan University affiliated',
  },
  {
    degree: '+2 (Higher Secondary)',
    institution: 'Guru Jajur Secondary School, Dang',
    note: null,
  },
]

function Education() {
  return (
    <section id="education" className="section section--panel">
      <div className="section__inner">
        <p className="section__eyebrow">// 04 — Education</p>
        <h2 className="section__title">Education</h2>

        <div className="timeline">
          {EDUCATION.map((item, index) => (
            <Reveal key={item.degree} delay={index * 100}>
              <div className="timeline__item">
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__content">
                  <h3 className="timeline__degree">{item.degree}</h3>
                  <p className="timeline__institution">{item.institution}</p>
                  {item.note && <p className="timeline__note">{item.note}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
