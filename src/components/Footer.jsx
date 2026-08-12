import { Github, Linkedin, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__text">© 2026 Puran Chaudhary. All rights reserved.</p>
        <div className="footer__socials">
          <a href="https://github.com/PuranChaudhary" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hero__social">
            <Github size={17} />
          </a>
          <a href="https://www.linkedin.com/in/puran-chaudhary-9bb2b5235/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hero__social">
            <Linkedin size={17} />
          </a>
          <a href="mailto:chaudharypuran599@gmail.com" aria-label="Send email" className="hero__social">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
