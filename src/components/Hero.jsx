import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            Hello, I&apos;m
          </p>
          <h1 className="hero__name">Puran Chaudhary</h1>
          <p className="hero__title">B.Sc. CSIT Student&nbsp;|&nbsp;Web Developer</p>
          <p className="hero__intro">
            I am a passionate web developer and B.Sc. CSIT student who enjoys building modern,
            responsive and user-friendly web applications.
          </p>

          <div className="hero__actions">
            <a href="/Puran-Chaudhary-CV.pdf" download className="btn btn--primary">
              Download CV
            </a>
            <button className="btn btn--outline" onClick={() => handleScrollTo('contact')}>
              Contact Me
            </button>
            <button className="btn btn--ghost" onClick={() => handleScrollTo('projects')}>
              View Projects
              <ArrowDown size={16} />
            </button>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/PuranChaudhary" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hero__social">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/puran-chaudhary-9bb2b5235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hero__social">
              <Linkedin size={18} />
            </a>
            <a href="mailto:chaudharypuran599@gmail.com" aria-label="Send email" className="hero__social">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero-portrait">
            <span className="hero-portrait__bracket hero-portrait__bracket--top" aria-hidden="true"></span>
            <img
              src="/profile.jpg"
              alt="Portrait of Puran Chaudhary"
              className="hero-portrait__image"
            />
            <span className="hero-portrait__bracket hero-portrait__bracket--bottom" aria-hidden="true"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
